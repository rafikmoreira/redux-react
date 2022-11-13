import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contador from "./pages/contador";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contador",
    element: <Contador />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
