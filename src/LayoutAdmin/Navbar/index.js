import { BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import routes from '../../routes.config.js';
import './style.css';

const componentName = 'Navbar';
export default function () {
  const token = localStorage.getItem('token');
  return (
    <div className={componentName}>
      <div className='logo'>
        <BiMoviePlay></BiMoviePlay>
      </div>
      <div className='nav-link'>
        
        {token ? (
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => {
              localStorage.removeItem('token');
            }}
          >
            <Link to='/login' className={'menu-item'}>
              Logout
            </Link>
          </button>
        ) : (
          <Link to='/login' className={'menu-item'} id = "authen1">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
