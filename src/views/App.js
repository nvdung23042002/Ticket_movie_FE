import './App.css';
import Navbar from '../Layout/navbar/Navbar';
import Footer from '../Layout/footer/Footer';
import HeroList from '../components/main/selection/slider/HeroList';
import MovieSelection from '../components/main/selection/SliderSelection/MovieSelection';
// import Slider from '../components/main/selection/slider/HeroList';
import MovieDetails from '../components/main/selection/movies/MovieDetails';
import Trailer from '../components/main/selection/movies/Trailer';
import Payment from '../components/main/payment/Payment';
import TicketInfo from '../components/main/ticket/TicketInfo';



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.config.js";
function App() {
  const router = createBrowserRouter(routes);
  return (
    
    // <main>
    //   <header className='header-bg'>
    //     <Navbar></Navbar>
    //     <div className='container-bg'>
    //       <HeroList></HeroList>
    //       <div className="space">
    //       <div className="text">
    //         <h1>Movie Selection</h1>
    //       </div>
    //         <MovieSelection></MovieSelection>
    //       </div>
    //     </div>
    //     <Footer></Footer>
    //     <MovieDetail></MovieDetail>
    //   </header>
    // </main>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
