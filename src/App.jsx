import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("./Components/Login"));
const Browse = lazy(() => import("./Components/Browse"));

const route = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "browse", element: <Browse /> },
]);

const App = () => {
  return (
    <>
      <Suspense fallback={<h2>...Loading</h2>}>
        <RouterProvider router={route} />
      </Suspense>
    </>
  );
};

export default App;
