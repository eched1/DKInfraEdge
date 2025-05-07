import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold">
        <img src={logo} alt="DKInfraEdge Logo" className="h-8" />
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
