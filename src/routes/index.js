import ProfilePage from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";

export const routes = [
  {
    path: "/",
    element: <ProfilePage />,
  },
  {
    path: "/edit/:id",
    element: <ProfileEdit />,
  },
];
