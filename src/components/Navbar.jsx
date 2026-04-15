import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-[#1A332B]">KeenKeeper</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#2D5A4C]">Home</Link>
            <Link to="/timeline" className="text-gray-600 hover:text-[#2D5A4C]">Timeline</Link>
            <Link to="/stats" className="text-gray-600 hover:text-[#2D5A4C]">Analytics</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#1A332B]">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 pb-4 px-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Home</Link>
          <Link to="/timeline" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Timeline</Link>
          <Link to="/stats" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Analytics</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;