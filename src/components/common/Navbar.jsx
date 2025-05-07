import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">DKInfraEdge</Link>
      <div className="flex gap-4">
        <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Home</NavLink>
        <NavLink to="/services" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Services</NavLink>
        <NavLink to="/contact" className={({isActive}) => `px-3 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Contact</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
