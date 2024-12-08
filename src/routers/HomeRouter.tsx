import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const HomeRouter: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    }
]

export default HomeRouter;