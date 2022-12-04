import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Layout from "./Layout";
import Payment from "./Pages/Payment"
import MovieDetails from "./Pages/MovieDetails";
import Ticket from "./Pages/Ticket";
import Seat from "./Pages/Booking/Seat"
import Login from "./Pages/Login";
import Authentication from "./guards/Authen";
import Signup from "./Pages/signup";

const routes = [
  {
    path: "/",
    element: <Layout component={Home} />,
    label: "Home"
  },
  {
    path: "/booking",
    element: <Authentication><Layout component={Booking} /></Authentication>,
    label: "Booking"
  },
  {
    path: "/payment",
    element: <Layout component={Payment} />,
  },
  {
    path: "/login",
    element: <Login />,
    label: "Login"
  },
  {
    path: "/signup",
    element: <Signup />,
    label: "Signup"
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