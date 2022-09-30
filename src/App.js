import "./App.css";
import Modal from "./components/Modal";
import PlayGroung from "./components/PlayGround";
import { useSelector } from "react-redux";

function App() {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <div className="App">
      <PlayGroung />
      {isModalOpen && <Modal />}
    </div>
  );
}

export default App;
