import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
        <Link to="/red">red</Link>
        <Link to="/orange">orange</Link>
        <Link to="/yellow">yellow</Link>
        <Link to="/green">green</Link>
        <Link to="/blue">blue</Link>
        <Link to="/purple">purple</Link>
        <Link to="/">home</Link>
    </div>
  );
}