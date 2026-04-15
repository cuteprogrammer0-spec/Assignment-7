import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A332B] text-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Brand Logo/Heading */}
        <h2 className="text-5xl font-bold mb-6 tracking-tight">KeenKeeper</h2>
        
        {/* Slogan */}
        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-12">
          <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest text-gray-200">Social Links</h4>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A332B] hover:bg-gray-200 transition-all">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A332B] hover:bg-gray-200 transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A332B] hover:bg-gray-200 transition-all">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700/50 w-full mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;