import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Studentreg from "./pages/Studentreg";
import Faculties from "./pages/Faculties";
import Listfact from "./pages/Listfact";
import Liststd from "./pages/Liststd";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student-reg" element={<Studentreg />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/listfact" element={<Listfact />} />
          <Route path="/liststd" element={<Liststd />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
