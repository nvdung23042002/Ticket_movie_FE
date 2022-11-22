import Navbar from "../Navbar";
import Footer from "./footer/Footer";
import "./style.css"
export default function (props) {
  return (
    <div className="Layout">
      <Navbar></Navbar>
        {props.component ? <props.component /> : <div>Empty</div>}
      <div><Footer/></div>
    </div>
  );
}
