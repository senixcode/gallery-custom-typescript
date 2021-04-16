import "./styles.css";
// import "./styles_modal_image.css";
import ScreenTestGridMe from "./pages/TestGridMe";
import ScreenTestModalImage from "./pages/TestModalImage";
import TestModal from "./modal-image/Index";
import TestPhotoswipe from "./pages/TestPhotoswipe";
export default function App() {
  return (
    <div className="App">
      <ScreenTestGridMe />
      <ScreenTestModalImage />
      <TestModal />
      <TestPhotoswipe />
    </div>
  );
}
