import FindADoctor from "./components/find_a_doctor/FindADoctor";
import Navbar from "./components/navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, Login, OverServices } from "./pages";
import Root from "./Root";
import { ErrorPage } from "./components";
function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/over-services",
        element: <OverServices/>,
      },
      {
        path: "/find-doctor",
        element: <FindADoctor/>,
      },
    
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
  return (
    <div>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    </div>
  );
} 
export default App;