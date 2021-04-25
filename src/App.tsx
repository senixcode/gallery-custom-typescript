import "./styles.css";
import ModalProvider from "./senixcode-lightbox-custom/ModalContext";
import Basic from "./senixcode-lightbox-custom/examples/Basic";
import Video from "./senixcode-lightbox-custom/assets/Video";
export default function App() {
  return (
    <ModalProvider>
      <h1>SenixCode Gallery Custom</h1>
      <Basic />
    </ModalProvider>
  );
}
