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
import Admin from "./Pages/Admin";
import AddFilm from "./Pages/Admin/FilmManagement/AddFilm"
const routes = [
  {
    path: "/booking",
    element: <Layout component={Booking} />,
  },
  {
    path: "/payment",
    element: <Layout component={Payment} />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
  },
  {
    path: "/admin",
    element: <Layout component={Admin} />
  },
  {
    path: "/admin/add-film",
    element: <Layout component={AddFilm} />
  },
  {
    path: "/admin/edit-film/:id",
    element: <Layout component={AddFilm} />
  },
  {
    path: "/",
    element: <Layout component={Home} />,
    label: "Home"
  },
  {
    path: "/login",
    element: <Login />,
    label: "Login"
  }

];
export default routes;
