import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Rooms from "./pages/Booking/Rooms";
import Deluxe from "./pages/Room/Deluxe";
import Prestige from "./pages/Room/Prestige";
import Double from "./pages/Room/Double";
import Signature from "./pages/Room/Signature";
import ContactUs from "./pages/Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/booking",
    element: <Rooms />,
  },
  {
    path: "/deluxe",
    element: <Deluxe />,
  },
  {
    path: "/prestige",
    element: <Prestige />,
  },
  {
    path: "/signature",
    element: <Signature />,
  },
  {
    path: "/double",
    element: <Double />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
