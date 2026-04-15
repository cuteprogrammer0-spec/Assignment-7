import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineClock, HiOutlineChartBar } from "react-icons/hi";

const Navbar = () => {
  // নেভিগেশন লিংকগুলোর ডাটা
  const links = [
    { name: "Home", path: "/", icon: <HiOutlineHome className="text-xl" /> },
    { name: "Timeline", path: "/timeline", icon: <HiOutlineClock className="text-xl" /> },
    { name: "Stats", path: "/stats", icon: <HiOutlineChartBar className="text-xl" /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* বাঁদিকের লোগো সেকশন */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#1A332B]">
              Keen<span className="text-[#2D5A4C]">Keeper</span>
            </h1>
          </div>

          {/* ডানদিকের নেভিগেশন লিংক সেকশন */}
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#2D5A4C] text-white shadow-md" // অ্যাক্টিভ থাকলে এই স্টাইল হবে
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#2D5A4C]" // সাধারণ স্টাইল
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;