import React, { useContext } from "react";
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
import ForgotPassword from "./pages/forgot-password/forgot-password";
import RecoverPassword from "./pages/recover-password/recover-password";
import Dashboard from "./admin/product/product";
import Main from "./admin/main/main";
import ProductManagement from "./admin/product/product";
import UserManagement from "./admin/user/user";
import Notfound from "./pages/404/notfound";
function App() {
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  // console.log(">>check redux: ", dataUserRedux);
  // const { user } = useContext(UserContext);
  // console.log({ user });

  // Kiểm tra nếu tuyến đường là "/login"
  const location = useLocation();
  // Kiểm tra nếu tuyến đường là "/login"
  const routesWithoutHeaderAndFooter = [
    "/login",
    "/forgot-password",
    "/recover-password",
    "/admin/main",
    "/admin/dashboard/user",
    "/admin/dashboard/product",
    "/admin/auth/login",
  ];
  const checkAppear = routesWithoutHeaderAndFooter.includes(location.pathname);

  return (
    <div className="App">
      {!checkAppear ? <HeaderComponent /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/admin" element={<Main />}>
          <Route path="dashboard/user" element={<UserManagement />} />
          <Route path="dashboard/product" element={<ProductManagement />} />
          {/* <Route path="auth" element={<Dashboard />}>
            <Route path="/login" element={<Login />} />
          </Route> */}
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      {!checkAppear ? <FooterComponent /> : null}

      {/* <ZaloChat />
      <FacebookChat /> */}
    </div>
  );
}

export default App;
