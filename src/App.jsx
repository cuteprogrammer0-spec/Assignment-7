import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // এই ইমপোর্টটা মাস্ট
import { Toaster } from "react-hot-toast";

// আপাতত বাকি পেজগুলোর জন্য ডামি কম্পোনেন্ট (পরে আমরা এগুলো আলাদা ফাইলে করবো)
const Timeline = () => <div className="py-20 text-center text-2xl font-bold">Timeline Page Coming Soon...</div>;
const Stats = () => <div className="py-20 text-center text-2xl font-bold">Stats Page Coming Soon...</div>;
const NotFound = () => <div className="py-20 text-center text-2xl font-bold text-red-500">404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar সব পেজেই থাকবে */}
        <Navbar />
        
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          
          {/* Timeline Route */}
          <Route path="/timeline" element={<Timeline />} />
          
          {/* Stats Route */}
          <Route path="/stats" element={<Stats />} />

          {/* Requirement 10.1: 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Requirement 10.3: Toast Notification Container */}
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;