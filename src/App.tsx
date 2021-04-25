import "./styles.css";
import ModalProvider from "./senixcode-lightbox-custom/ModalContext";
import Basic from "./senixcode-lightbox-custom/examples/Basic";
import styled from "styled-components";
const Title = styled.h1`
  display: block;
  text-align: center;
  margin: 1em;
  @media screen and (min-width: 600px) {
    margin-top: 0.5em;
  }
`;

export default function App() {
  return (
    <ModalProvider>
      <Title>senixcode-lightbox-custom</Title>
      <Basic />
    </ModalProvider>
  );
}
