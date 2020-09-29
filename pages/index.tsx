import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Axios from "axios";
import { IPassenger } from "../models";
import { Loader } from "../components";
import { Passenger } from "../components/Passenger";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: red;
  text-align: center;
  text-transform: uppercase;
`;

const Button = styled.button`
  display: block;
  padding: 8px 16px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
`;

interface IPassengersProps {}

const Passengers: React.FC<IPassengersProps> = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number | null>(null);
  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const [passengers, setPassengers] = React.useState<IPassenger[]>([]);
  const [totalPassengers, setTotalPassengers] = React.useState<number | null>(
    null,
  );

  const getInitialPassengers = async () => {
    try {
      const response = await Axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`,
      );
      setPassengers(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalPassengers(response.data.totalPassengers);
      setPageLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getPassengers = async () => {
    try {
      setPageLoading(true);
      const response = await Axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${
          currentPage + 1
        }&size=10`,
      );
      setPassengers((cs) => [...cs, ...response.data.data]);
      setPageLoading(false);
      setCurrentPage((cs) => cs + 1);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getInitialPassengers();
  }, []);

  return (
    <Layout title="Octovan - Passengers">
      <Title>
        Passengers {totalPassengers !== null && `(${totalPassengers})`}
      </Title>
      {passengers.map((passenger) => (
        <Passenger key={passenger._id} passenger={passenger} />
      ))}
      {pageLoading && <Loader />}
      {!pageLoading && currentPage + 1 <= totalPages && (
        <Center>
          <Button onClick={getPassengers}>Load More</Button>
        </Center>
      )}
    </Layout>
  );
};

export default Passengers;
