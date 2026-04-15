import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import FriendCard from "../components/FriendCard"; 

const Home = () => {
  const [friends, setFriends] = useState([]);

  
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Data fetch korte somossa hocche:", err));
  }, []);

  const stats = [
    { id: 1, count: "10", label: "Total Friends" },
    { id: 2, count: "3", label: "On Track" },
    { id: 3, count: "6", label: "Need Attention" },
    { id: 4, count: "12", label: "Interactions This Month" },
  ];

  return (
    <div className="bg-[#F8FAFB] min-h-screen pb-20">
      
      
      <div className="max-w-4xl mx-auto text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A332B] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <button className="inline-flex items-center gap-2 bg-[#2D5A4C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#24483d] transition-colors shadow-lg">
          <HiPlus className="text-xl" />
          Add a Friend
        </button>
      </div>

  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <h2 className="text-3xl font-bold text-[#2D5A4C] mb-2">{stat.count}</h2>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A332B]">Your Friends</h2>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;