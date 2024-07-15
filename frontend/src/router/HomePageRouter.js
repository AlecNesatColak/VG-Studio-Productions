import Home from "../Pages/Home/Home";
import About from "../Pages/About/About.jsx";
import Djs from "../Pages/Djs/Djs.jsx";
import Events from "../Pages/Events/Events.jsx";
import Models from "../Pages/Models/Models.jsx";
import Portfolio from "../Pages/Portfolio/Portfolio.jsx";

export const HomePageRouter = [
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/about",
        element: <About />,

    },
    {
        path: "/djs",
        element: <Djs />,

    },
    {
        path: "/events",
        element: <Events />,

    },
    {
        path: "/models",
        element: <Models />,

    },
    {
        path: "/portfolio",
        element: <Portfolio />,

    },
]

export default HomePageRouter;