import './App.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroList from '../components/main/selection/slider/HeroList';
import MovieSelection from '../components/main/selection/SliderSelection/MovieSelection';
// import Slider from '../components/main/selection/slider/HeroList';
function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar></Navbar>
        <HeroList></HeroList>
        <div className="space">
          <div className="text">
            <h1>Movie Selection</h1>
          </div>
        </div>
        <MovieSelection></MovieSelection>
        <Footer></Footer>
      </header>
    </main>
  );
}

export default App;
