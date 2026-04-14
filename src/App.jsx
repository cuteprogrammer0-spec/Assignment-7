import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import { Toaster } from "react-hot-toast";
import { AlertTriangle } from "lucide-react";

// Requirement 10.1: Professional 404 Page Component
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
    <div className="p-6 bg-red-50 text-red-500 rounded-full mb-6">
      <AlertTriangle size={64} />
    </div>
    <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
    <p className="text-xl text-gray-500 mb-8 max-w-md">
      Oops! The page you are looking for doesn't exist or has been moved.
    </p>
    <Link 
      to="/" 
      className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
    >
      Back to Home
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans selection:bg-indigo-100 selection:text-indigo-700">
        
        {/* Navbar: Persistent across all pages */}
        <Navbar />
        
        <main className="pb-20">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* Requirement 4 & 5: Dynamic Friend Details Route */}
            <Route path="/friend/:id" element={<FriendDetails />} />
            
            {/* Requirement 7: Timeline Page Route */}
            <Route path="/timeline" element={<Timeline />} />
            
            {/* Challenge C1: Stats/Analytics Page Route */}
            <Route path="/stats" element={<Stats />} />

            {/* Requirement 10.1: Global 404 Handler */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>


        <Toaster 
          position="bottom-center" 
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '12px',
            },
          }} 
        />
      </div>
    </Router>
  );
}

export default App;