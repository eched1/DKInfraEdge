import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">DKInfraEdge</Link>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
