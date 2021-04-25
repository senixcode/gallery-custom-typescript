import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export default function Basic() {
  return (
    <Fragment>
      <Container>
        <p>Example 1</p>
      </Container>
      <Container>
        <p>Example 2</p>
      </Container>
    </Fragment>
  );
}
