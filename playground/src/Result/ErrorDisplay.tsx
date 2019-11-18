import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.error.background};
  color: ${props => props.theme.error.color};
  padding: 0.2em 0.5em;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

interface IProps {
  error: Error;
}

const ErrorDisplay: FC<IProps> = ({ error }) => {
  return (
    <Container>
      <p>{error.message}</p>
    </Container>
  );
};

export default ErrorDisplay;