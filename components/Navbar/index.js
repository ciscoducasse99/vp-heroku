import Link from 'next/link';
import "./Navbar.scss";

const NAVBAR = () => (

  <nav className="navbar navbar-expand-sm justify-content-center">
    <Link href="/"><a className="navbar-brand lead mr-0">The Vision Project</a></Link>
    <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
      <ul className="navbar-nav mx-auto text-center">
        <li className="nav-item active">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
        <li className="nav-item"><a className="nav-link" href=""></a> </li>
        <li className="nav-item"><a className="nav-link" href=""></a> </li>
      </ul>
    </div>
  </nav>

);

export default NAVBAR;