import { useEffect, useState } from "react";
import { UserPlus, Users, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => console.error(err));
  }, []);

  const overdue = friends.filter(f => f.status === "overdue").length;
  const almost = friends.filter(f => f.status === "almost due").length;
  const onTrack = friends.filter(f => f.status === "on-track").length;

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <section className="text-center mb-16 py-16 bg-white rounded-[2rem] shadow-sm border border-gray-100 px-6">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Stay Connected with <span className="text-indigo-600">Friends</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The smartest way to manage your friendships. Track interactions and never let a connection fade away.
        </p>
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-100 active:scale-95">
          <UserPlus size={22} /> Add a Friend
        </button>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <SummaryCard icon={<Users size={24} />} label="Total" value={loading ? "--" : friends.length} color="blue" />
        <SummaryCard icon={<AlertCircle size={24} />} label="Overdue" value={loading ? "--" : overdue} color="red" />
        <SummaryCard icon={<Clock size={24} />} label="Almost Due" value={loading ? "--" : almost} color="yellow" />
        <SummaryCard icon={<CheckCircle2 size={24} />} label="On Track" value={loading ? "--" : onTrack} color="green" />
      </div>

      {loading ? (
        <div className="text-center py-20"><div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map(f => <FriendCard key={f.id} friend={f} />)}
        </div>
      )}
    </div>
  );
};

const SummaryCard = ({ icon, label, value, color }) => {
  const colors = { blue: "bg-blue-50 text-blue-600", red: "bg-red-50 text-red-600", yellow: "bg-yellow-50 text-yellow-600", green: "bg-green-50 text-green-600" };
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
      <div className={`p-4 rounded-2xl ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-400 font-bold uppercase">{label}</p>
        <h3 className="text-3xl font-black text-gray-800 leading-none mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default Home;