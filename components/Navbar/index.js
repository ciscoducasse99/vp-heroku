import Link from 'next/link';
import "./Navbar.scss";

const NAVBAR = () => (

  <nav className="navbar navbar-expand-sm justify-content-center sticky-top">
    <Link href="/"><a className="navbar-brand lead mr-0">The Vision Project</a></Link>
    <div className="navbar-collapse collapse justify-content-between align-items-center w-100">
      <ul className="navbar-nav mx-auto text-center">
      </ul>
      <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
      </ul>
    </div>
  </nav>

);

export default NAVBAR;