import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Layout from "./Layout";
import Payment from "./Pages/Payment"
import MovieDetails from "./Pages/MovieDetails";
import Ticket from "./Pages/Ticket";
import Seat from "./Pages/Booking/Seat"

const routes = [
  {
    path: "/",
    element: <Layout component={Home} />,
    label: "Home"
  },
  {
    path: "/booking",
    element: <Layout component={Booking} />,
    label: "Booking"
  },
  {
    path: "/payment",
    element: <Layout component={Payment} />,
  },
  {
    path: "/login",
    element: <div>Login</div>,
    label: "Login"
  },
  {
    path: "/movie-details",
    element: <Layout component={MovieDetails} />
  },
  {
    path: "/ticket",
    element: <Layout component={Ticket} />
  },
  {
    path: "/booking/seat",
    element: <Layout component={Seat} />
  }
];
export default routes;