
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.config.js";
import "./App.css"
function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
