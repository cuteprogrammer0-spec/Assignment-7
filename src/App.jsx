import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import { Toaster } from "react-hot-toast";
import * as LucideIcons from "lucide-react"; 

const NotFound = () => {
  const AlertIcon = LucideIcons.AlertTriangle || LucideIcons.User;
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="p-6 bg-red-50 text-red-500 rounded-full mb-6">
        <AlertIcon size={64} />
      </div>
      <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="bg-[#1e3a34] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all">
        Back to Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-center" />
      </div>
    </Router>
  );
}

export default App;