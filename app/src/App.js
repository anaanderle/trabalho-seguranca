import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalUserProvider } from "./context/user";
import { GlobalToastrProvider } from "./context/toastr";
import { Toastr } from "./components/index";

function App() {
  return (
    <GlobalToastrProvider>
      <GlobalUserProvider>
        <RouterProvider router={router} />
        <Toastr />
      </GlobalUserProvider>
    </GlobalToastrProvider>
  );
}

export default App;
