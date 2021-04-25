import "./styles.css";
import ModalProvider from "./senixcode-lightbox-custom/ModalContext";
import Basic from "./senixcode-lightbox-custom/examples/Basic";
export default function App() {
  return (
    <ModalProvider>
      <h1 style={{ textAlign: "center", marginTop: "0.5em" }}>
        senixcode-lightbox-custom
      </h1>
      <h3 style={{ textAlign: "center" }}>typescript+css+style-components</h3>
      <h4 style={{ textAlign: "center" }}>
        features: masonry+gallery(image video)+modal, All custom
      </h4>
      <h4 style={{ textAlign: "center" }}>
        "No dynamic components, but custom"
      </h4>

      <Basic />
    </ModalProvider>
  );
}
