import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import Navbar from "./components/navbar/Navbar";

const routes = [
  {
    path: "/",
    element: <ProfilePage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/edit/:id",
    element: <ProfileEdit />,
  },
];

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
