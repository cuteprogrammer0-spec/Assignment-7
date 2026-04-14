import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Mail, Trash2, Archive, Moon } from "lucide-react";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriend(data.find((f) => f.id === parseInt(id))));
  }, [id]);

  if (!friend) return <div className="py-20 text-center">Loading...</div>;

  const handleAction = (type) => {
    const newEntry = { id: Date.now(), friendName: friend.name, type: type, date: new Date().toLocaleDateString() };
    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));
    toast.success(`${type} with ${friend.name} logged!`);
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-gray-100 text-center">
          <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-indigo-50 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
          <p className="text-indigo-600 font-semibold text-sm uppercase">{friend.status}</p>
          <p className="text-gray-500 mt-6 text-sm italic">"{friend.bio}"</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-600 text-sm">
            <Mail size={16} /> <span>{friend.email}</span>
          </div>
        </div>

        <div className="lg:col-span-8 bg-indigo-600 p-8 rounded-[2rem] text-white">
          <h3 className="text-xl font-bold mb-6">Quick Check-In</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button onClick={() => handleAction('Call')} className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/10 transition-all"><Phone size={24} /> <span className="font-bold">Call</span></button>
            <button onClick={() => handleAction('Text')} className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/10 transition-all"><MessageSquare size={24} /> <span className="font-bold">Text</span></button>
            <button onClick={() => handleAction('Video')} className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/10 transition-all"><Video size={24} /> <span className="font-bold">Video</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;