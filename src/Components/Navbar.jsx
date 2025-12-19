import { Link, Outlet } from "react-router-dom";


export function Navbar() {
    return (
      <>
      <div className="nav">
        <ul>
            <li><Link to='/home'>Home</Link> </li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/contact'>Contact</Link> </li>
            <li><Link to='/jobs'>Jobs</Link> </li>
            <li><Link to="/galary">Galary</Link></li>
        </ul>
        <Outlet/>
      </div>
      
      </>
    );
  }