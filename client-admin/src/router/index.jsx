import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Layout from "../components/layout";
import MoviesView from "../views/MoviesView";
import Genres from "../views/Genres";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        loader: () => {
            if (!localStorage.access_token) {
                return redirect("/login");
            }
            return null
        },
        children: [
            {
                path: "/",
                element: <MoviesView />
            },
            {
                path: "/genres",
                element: <Genres />
            },
            {
                path: "/register",
                element: <RegisterView />
            }
        ]
    },
    {
        path: "/login",
        loader: () => {
            if (localStorage.access_token) {
                return redirect("/");
            }
            return null
        },
        element: <LoginView />
    }
]);

export default router