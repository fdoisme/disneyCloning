import {
    createBrowserRouter,
    RouterProvider,
    redirect
} from "react-router-dom";
import Layout from "../components/layout";
import HomeView from "../views/HomeView";
import MovieDetailsView from "../views/MovieDetailsView";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <HomeView/>
            },
            {
                path: "/details/:id",
                element: <MovieDetailsView/>
            }
        ]
    },
]);

export default router