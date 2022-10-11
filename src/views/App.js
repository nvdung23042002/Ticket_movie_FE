import './App.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroSelection from '../components/main/selection/HeroSelection';
import ListSelection from '../components/main/selection/ListSelection';

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar></Navbar>
        <HeroSelection></HeroSelection>
        <ListSelection></ListSelection>
        <Footer></Footer>
      </header>
    </main>
  );
}

export default App;
