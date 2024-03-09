import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";

const routes = [
  {
    path: "/",
    element: <ProfilePage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/edit",
    element: <ProfileEdit />,
  },
];

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
} 

export default App;
