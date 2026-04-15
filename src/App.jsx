import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { ToastContainer } from "react-toastify"; // <-- импорт
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./component/navigation/Navigation";

import MainContent from "./component/main/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainContent />
        <Navigation />
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
