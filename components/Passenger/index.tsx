import { IPassenger } from "../../models";
import Link from "next/link";
import { Button, CTALink, PassengerBox } from "./Styles";

interface IPassengerProps {
  passenger: IPassenger;
  editable?: boolean;
  onEdit?: () => void;
}

export const Passenger: React.FC<IPassengerProps> = ({
  passenger,
  editable = false,
  onEdit,
}) => {
  return (
    <PassengerBox>
      <div className="passenger__logo-wrapper">
        {passenger.airline && passenger.airline.logo ? (
          <img
            src={passenger.airline.logo}
            alt={passenger.airline.name}
            className="passenger__logo"
          />
        ) : (
          <div className="passenger__logo">No Logo</div>
        )}
      </div>
      <div className="passenger__information">
        <span className="passenger__name">
          {passenger.name && passenger.name.trim().length > 0
            ? passenger.name
            : "No Name"}
        </span>
        <span className="passenger__trips">{passenger.trips} Trips</span>
        {!editable && (
          <Link href={`/passenger/${passenger._id}`}>
            <CTALink>Go To Details</CTALink>
          </Link>
        )}
        {editable && <Button onClick={onEdit}>Edit</Button>}
      </div>
    </PassengerBox>
  );
};
