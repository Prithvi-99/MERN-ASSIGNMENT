import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Brand</Link>
        <Link to="/" className="hover:text-blue-500">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
