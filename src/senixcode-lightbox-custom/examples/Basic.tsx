import { Fragment } from "react";
import styled from "styled-components";
import { Gallery } from "../Gallery";
import { dataExample1, dataExample2 } from "./fakeData";
const Container = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 600px) {
    display: flex;
    width: 100%;
    margin: 3em 0;
    justify-content: center;
  }
`;

export default function Basic() {
  return (
    <Fragment>
      <Container>
        <Gallery items={dataExample1} />
      </Container>
      <Container>
        <Gallery items={dataExample2} />
      </Container>
    </Fragment>
  );
}
