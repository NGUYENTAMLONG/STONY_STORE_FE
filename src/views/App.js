import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BodyComponent from "../components/content";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import "./App.css";
import { UserContext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import ZaloChat from "../components/widgets/zalo";
import FacebookChat from "../components/widgets/facebook";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Login from "../components/login";
import { handleRefreshRedux } from "../redux/actions/userAction";
import Profile from "./pages/profile/profile";
import Contact from "./pages/contact/contact";
function App() {
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  // console.log(">>check redux: ", dataUserRedux);
  // const { user } = useContext(UserContext);
  // console.log({ user });

  // Kiểm tra nếu tuyến đường là "/login"
  const location = useLocation();
  // Kiểm tra nếu tuyến đường là "/login"
  const isLoginPage = location.pathname === "/login";

  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     dispatch(handleRefreshRedux());
  //   }
  // }, []);
  return (
    <div className="App">
      {!isLoginPage && <HeaderComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>{" "}
      {!isLoginPage && <FooterComponent />}
      {/* <ZaloChat />
      <FacebookChat /> */}
    </div>
  );
}

export default App;
