import DeveloperLogin from "../DeveloperLogin/DeveloperLogin";
import DeveloperPage from "../DevHomePage";

const DeveloperRouter = [
  {
    path: "/developer-login",
    element: <DeveloperLogin />,
  },
  {
    path: "/developer-home",
    element: <DeveloperPage />,
  },
  // Add other routes as needed
];

export default DeveloperRouter;
