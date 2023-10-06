import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BodyComponent from "../components/content";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import "./App.css";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import ZaloChat from "../components/widgets/zalo";
import FacebookChat from "../components/widgets/facebook";
function App() {
  const dataUserRedux = useSelector((state) => state.user.account);
  // console.log(">>check redux: ", dataUserRedux);
  const { user } = useContext(UserContext);
  // console.log({ user });
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <ZaloChat />
      <FacebookChat />
      <FooterComponent />
    </div>
  );
}

export default App;
