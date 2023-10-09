import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./views/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import router from "./routes";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <UserProvider>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
