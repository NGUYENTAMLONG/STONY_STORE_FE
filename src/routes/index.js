import { createBrowserRouter } from "react-router-dom";
import App from "../views/App";
import Login from "../components/login";
import About from "../views/pages/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
