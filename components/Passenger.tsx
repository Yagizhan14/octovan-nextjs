import styled from "styled-components";
import { IPassenger } from "../models";
import Link from "next/link";

const PassengerBox = styled.div`
  padding: 1rem;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  & div + div {
    margin-right: 1rem;
  }
`;

interface IPassengerProps {
  passenger: IPassenger;
}

export const Passenger: React.FC<IPassengerProps> = ({ passenger }) => {
  return (
    <PassengerBox>
      {passenger.name}
      <Link href={`/passenger/${passenger._id}`}>
        <a>Go To Details</a>
      </Link>
    </PassengerBox>
  );
};
