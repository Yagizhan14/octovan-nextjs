import * as React from "react";
import Layout from "../../components/layout";
import { Passenger } from "../../components/Passenger";
import { IPassenger } from "../../models";
import Axios from "axios";
import { Loader } from "../../components";
import Modal from "../../components/Modal";
import { Button } from "../../components/Passenger/Styles";
import { GetServerSideProps } from "next";

interface IPassengerPageProps {
  id: string;
}

const PassengerPage: React.FC<IPassengerPageProps> = ({ id }) => {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const [passenger, setPassenger] = React.useState<IPassenger | null>(null);
  const [isEditModalShown, setIsEditModalShown] = React.useState<boolean>(
    false,
  );
  const [editedPassengerName, setEditedPassengerName] = React.useState<string>(
    "",
  );
  const [isSuccessModalShown, setIsSuccessModalShown] = React.useState<boolean>(
    false,
  );
  const [isErrorModalShown, setIsErrorModalShown] = React.useState<boolean>(
    false,
  );

  const getPassenger = React.useCallback(async () => {
    try {
      const response = await Axios.get(
        `https://api.instantwebtools.net/v1/passenger/${id}`,
      );
      return response.data;
    } catch (err) {
      return false;
    }
  }, []);

  const updatePassenger = React.useCallback(async () => {
    try {
      const response = await Axios.patch(
        `https://api.instantwebtools.net/v1/passenger/${id}`,
        {
          name: editedPassengerName,
        },
      );
      return response.data;
    } catch (err) {
      return false;
    }
  }, [editedPassengerName, id]);

  const onSubmit = async () => {
    setIsEditModalShown(false);
    setPageLoading(true);
    const updateReponse = await updatePassenger();
    if (updateReponse !== false) {
      const fetchReponse = await getPassenger();
      if (fetchReponse !== false) {
        setPassenger(fetchReponse);
        setIsSuccessModalShown(true);
      } else {
        setIsErrorModalShown(true);
      }
    } else {
      setIsErrorModalShown(true);
    }
    setPageLoading(false);
  };

  React.useEffect(() => {
    getPassenger().then((res) => setPassenger(res));
    setPageLoading(false);
  }, []);

  if (pageLoading) return <Loader />;

  return (
    <Layout title={`Passenger ${passenger ? passenger.name : ""} - Octovan`}>
      {passenger !== null && (
        <Passenger
          onEdit={() => setIsEditModalShown(true)}
          editable
          passenger={passenger}
        />
      )}

      <Modal
        isShown={isEditModalShown}
        onDismiss={() => setIsEditModalShown(false)}
      >
        <label id="name">
          Passenger Name:
          <input
            type="text"
            value={editedPassengerName}
            onChange={(e) => setEditedPassengerName(e.target.value)}
          />
        </label>
        <Button onClick={onSubmit}>Submit</Button>
      </Modal>

      <Modal
        isShown={isSuccessModalShown}
        onDismiss={() => setIsSuccessModalShown(false)}
      >
        <h3>Successfully updated passenger.</h3>
      </Modal>

      <Modal
        isShown={isErrorModalShown}
        onDismiss={() => setIsErrorModalShown(false)}
      >
        <h3>Error while updating passenger. Please try again in a while.</h3>
      </Modal>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params.id,
    },
  };
};

export default PassengerPage;
