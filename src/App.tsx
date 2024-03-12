import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import PageNotFound from "./pages/404";
import { Toaster } from "react-hot-toast";

const routes = [
  {
    path: "/",
    element: <ProfilePage />,
    errorElement: <PageNotFound />,
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
      <Toaster position="top-right" reverseOrder={true} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
