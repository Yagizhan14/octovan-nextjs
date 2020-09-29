import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { Passenger } from "../../components/Passenger";
import { IPassenger } from "../../models";
import Axios from "axios";
import { Loader } from "../../components";

interface IPassengerPageProps {}

const PassengerPage: React.FC<IPassengerPageProps> = () => {
  const {
    query: { id },
  } = useRouter();

  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const [passenger, setPassenger] = React.useState<IPassenger | null>(null);

  const getPassenger = async () => {
    try {
      const response = await Axios.get(
        `https://api.instantwebtools.net/v1/passenger/${id}`,
      );
      setPassenger(response.data);
      setPageLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getPassenger();
  }, []);

  if (pageLoading) return <Loader />;

  return (
    <Layout title={`Passenger ${passenger ? passenger.name : ""} - Octovan`}>
      <div>
        <h1>Passenger with id of {id}</h1>
        {passenger !== null && <Passenger passenger={passenger} />}
      </div>
    </Layout>
  );
};

export default PassengerPage;
