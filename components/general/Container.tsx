import styled from "styled-components";

const Main = styled.main`
  max-width: 900px;
  margin: 3rem auto;
`;

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return <Main>{children}</Main>;
};
