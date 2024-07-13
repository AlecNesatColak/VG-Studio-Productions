import AdminDashboard from "../AdminPanelPages/Dashboard/AdminDashboard.jsx";
import AdminDjs from "../AdminPanelPages/Djs/AdminDjs.jsx";
import AdminEvents from "../AdminPanelPages/Events/AdminEvents.jsx";
import AdminModels from "../AdminPanelPages/AdminModels/AdminModels.jsx";
import AdminPortfolio from "../AdminPanelPages/AdminPortfolio/AdminPortfolio.jsx";
import AdminSettings from "../AdminPanelPages/AdminSettings/AdminSettings.jsx";
import Register from "../AdminRegister/Register.jsx";

export const AdminRouter = [
    {
        path: "/admin-dashboard",
        element: <AdminDashboard />,

    },
    {
        path: "/admin-djs",
        element: <AdminDjs />,

    },
    {
        path: "/admin-events",
        element: <AdminEvents />,

    },
    {
        path: "/admin-models",
        element: <AdminModels />,

    },
    {
        path: "/admin-portfolio",
        element: <AdminPortfolio />,

    },
    {
        path: "/admin-settings",
        element: <AdminSettings />,

    },
    {
        path: "/admin-register",
        element: <Register />
    }
]

export default AdminRouter;