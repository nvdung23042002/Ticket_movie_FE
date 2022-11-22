import Home from "./Home";
import Booking from "./Booking";
import Layout from "./Layout";
import Payment from "./Payment"
import MovieDetails from "./MovieDetails";
import Ticket from "./Ticket";

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
    }
  ];
  export default routes;