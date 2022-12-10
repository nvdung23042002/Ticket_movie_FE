import "./style.css";
import routes from "../../routes.config.js";
import { Link } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { AiOutlineBars } from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi'

const componentName = "Navbar";
export default function () {
  return (
    <div className={componentName}>
      <div className="logo">
        <BiMoviePlay></BiMoviePlay>
      </div>
      <div className="nav-link">
        {routes.map((r) => (
          <Link to={r.path} className={"menu-item"}>
            {r.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
