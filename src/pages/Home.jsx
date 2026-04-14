import { useEffect, useState } from "react";
import { UserPlus, Users, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch("/friends.json");
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      } finally {
        // ১.৫ সেকেন্ড লোডিং এনিমেশন দেখানোর জন্য
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchFriends();
  }, []);

  const overdueCount = friends.filter(f => f.status === "overdue").length;
  const almostDueCount = friends.filter(f => f.status === "almost due").length;
  const onTrackCount = friends.filter(f => f.status === "on-track").length;

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      
      {/* Banner Section */}
      <section className="text-center mb-16 py-16 bg-white rounded-[2rem] shadow-sm border border-gray-100 px-6">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Stay Connected with <span className="text-indigo-600">Friends</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The smartest way to manage your friendships. Track interactions, set goals, 
          and never let a valuable connection fade away.
        </p>
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-100 active:scale-95">
          <UserPlus size={22} />
          Add a Friend
        </button>
      </section>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <SummaryCard icon={<Users size={24} />} label="Total Friends" value={loading ? "--" : friends.length} color="blue" />
        <SummaryCard icon={<AlertCircle size={24} />} label="Overdue" value={loading ? "--" : overdueCount} color="red" />
        <SummaryCard icon={<Clock size={24} />} label="Almost Due" value={loading ? "--" : almostDueCount} color="yellow" />
        <SummaryCard icon={<CheckCircle2 size={24} />} label="On Track" value={loading ? "--" : onTrackCount} color="green" />
      </div>

      {/* Friend List */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-gray-800">Your Friends</h2>
        <div className="h-1 flex-grow mx-6 bg-gray-100 rounded-full hidden md:block"></div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="w-14 h-14 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="mt-6 text-gray-500 font-semibold animate-pulse">Syncing your connections...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

const SummaryCard = ({ icon, label, value, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-600",
    yellow: "bg-yellow-50 text-yellow-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
      <div className={`p-4 rounded-2xl ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{label}</p>
        <h3 className="text-3xl font-black text-gray-800 leading-none mt-1">
          {value.toString().padStart(2, '0')}
        </h3>
      </div>
    </div>
  );
};

export default Home;