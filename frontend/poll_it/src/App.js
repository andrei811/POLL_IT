// import { Component } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </>

  );
}

export default App;
