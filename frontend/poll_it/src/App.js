// import { Component } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./pages/Login"
// import Register from "./pages/Register"

function App() {

  let Comp

  switch (window.location.pathname) {
    case "/":
      Comp = Home
      break;
    // case "/login":
    //   Comp = Login
    //   break;
    // case "/register":
    //   Comp = Register
    //   break;

    default:
      Comp = Home
      break;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Comp />
      </div>
    </>

  );
}

export default App;
