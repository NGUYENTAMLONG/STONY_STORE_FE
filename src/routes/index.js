import { createBrowserRouter } from "react-router-dom";
import App from "../views/App";
import Login from "../components/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
