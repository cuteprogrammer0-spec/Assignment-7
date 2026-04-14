import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3, Heart } from "lucide-react";

const Navbar = () => {
  
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive 
        ? "bg-indigo-600 text-white shadow-md" 
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
    
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Heart size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">
            Friend<span className="text-indigo-600">Sync</span>
          </span>
        </div>

        
        <div className="flex items-center gap-4">
          <NavLink to="/" className={navLinkStyles}>
            <Home size={18} />
            <span className="hidden md:inline font-medium">Home</span>
          </NavLink>

          <NavLink to="/timeline" className={navLinkStyles}>
            <Clock size={18} />
            <span className="hidden md:inline font-medium">Timeline</span>
          </NavLink>

          <NavLink to="/stats" className={navLinkStyles}>
            <BarChart3 size={18} />
            <span className="hidden md:inline font-medium">Stats</span>
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;