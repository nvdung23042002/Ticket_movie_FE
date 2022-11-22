
// import Navbar from '../Layout/navbar/Navbar';
// import Footer from '../Layout/footer/Footer';
// import HeroList from './components/main/selection/slider/HeroList';
// import MovieSelection from './components/main/selection/SliderSelection/MovieSelection';
// import Slider from '../components/main/selection/slider/HeroList';
// import MovieDetails from './components/main/selection/movies/MovieDetails';
// import Trailer from './components/main/selection/movies/Trailer';
// import Payment from './components/main/payment/Payment';
// import TicketInfo from './components/main/ticket/TicketInfo';



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
