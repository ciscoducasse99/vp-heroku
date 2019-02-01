import Link from 'next/link';
import "./Navbar.scss";

const NAVBAR = () => (
  <nav className="navbar">
    <div className="">
      <div className="mr-auto">
        <Link href="/"><a className="navbar-brand lead">The Vision Project</a></Link>
      </div>
    </div>
  </nav>
);

export default NAVBAR;