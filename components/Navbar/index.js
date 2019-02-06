import Link from 'next/link';
import "./Navbar.scss";

const NAVBAR = () => (
    <nav className="navbar">
      <div className="">
        <Link href="/"><a className="navbar-brand lead d-flex justify-content-center justify-content-sm-start m-0">The Vision Project</a></Link>
      </div>
  </nav>
);

export default NAVBAR;