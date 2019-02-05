import Link from 'next/link';
import "./Navbar.scss";

const NAVBAR = () => (
    <nav className="navbar">
      <div className="ml-md-auto mx-auto">
        <Link href="/"><a className="navbar-brand lead">The Vision Project</a></Link>
      </div>
  </nav>
);

export default NAVBAR;