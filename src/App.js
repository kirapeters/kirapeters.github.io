import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage />},
    { path: '/blog', element: <Blog />}
  ])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
