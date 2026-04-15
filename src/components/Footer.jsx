import * as LucideIcons from "lucide-react"; 
import { Link } from "react-router-dom";

const Footer = () => {
  // আইকনগুলো সেফভাবে খুঁজে বের করার উপায় (Fallback সহ)
  const FacebookIcon = LucideIcons.Facebook || LucideIcons.FacebookIcon || LucideIcons.User;
  const InstagramIcon = LucideIcons.Instagram || LucideIcons.InstagramIcon || LucideIcons.User;
  const TwitterIcon = LucideIcons.Twitter || LucideIcons.TwitterIcon || LucideIcons.User;
  const HeartIcon = LucideIcons.Heart || LucideIcons.User;

  return (
    <footer className="bg-[#1e3a34] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold mb-2">FriendSync</h2>
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">Social Links</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-white text-[#1e3a34] p-2 rounded-full hover:scale-110 transition-transform">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="bg-white text-[#1e3a34] p-2 rounded-full hover:scale-110 transition-transform">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="bg-white text-[#1e3a34] p-2 rounded-full hover:scale-110 transition-transform">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
          <p>© 2026 FriendSync. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <HeartIcon size={12} className="text-red-500 fill-red-500" /> by 
            <span className="text-white font-medium ml-1">Mahdi Hasan</span>
          </p>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;