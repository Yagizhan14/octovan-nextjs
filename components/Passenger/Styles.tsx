import styled from "styled-components";

export const PassengerBox = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 2px;
  display: flex;
  height: 300px;
  margin: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  & div + div {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .passenger__logo-wrapper {
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin-right: 2rem;
  }

  .passenger__logo {
    width: 100%;
    max-height: 100%;
  }

  .passenger__information {
    display: flex;
    flex-direction: column;
  }

  .passenger__name {
    font-weight: bold;
  }

  .passenger__trips {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;
  color: white;
  background-color: red;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: block;
  border-radius: 999px;
  text-align: center;
  cursor: pointer;
  border: none;
`;

export const CTALink = styled.a`
  padding: 8px 14px;
  color: white;
  background-color: green;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: block;
  border-radius: 999px;
  text-align: center;
  cursor: pointer;
`;
