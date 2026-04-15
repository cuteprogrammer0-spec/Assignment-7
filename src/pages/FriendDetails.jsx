import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineClock, HiOutlineArchive, HiOutlineTrash, HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find((f) => f.id === parseInt(id));
        setFriend(selectedFriend);
      });
  }, [id]);

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }),
    };

    const existingTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existingTimeline]));

    toast.success(`${type} recorded with ${friend.name}!`, {
      style: { borderRadius: '10px', background: '#1A332B', color: '#fff' },
    });
  };

  if (!friend) return <div className="text-center pt-20">Loading...</div>;

  const statusStyles = {
    "overdue": "bg-[#FF4D4D] text-white",
    "almost due": "bg-[#FFB347] text-white",
    "on-track": "bg-[#1A332B] text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F8FAFB] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-50 object-cover"
            />
            <h2 className="text-2xl font-bold text-[#1A332B]">{friend.name}</h2>
            
            <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold mt-2 mb-4 ${statusStyles[friend.status]}`}>
              {friend.status.toUpperCase()}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {friend.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#E8F5E9] text-[#2D5A4C] text-xs font-bold rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-500 italic mb-2">"{friend.bio}"</p>
            <p className="text-gray-400 text-sm">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-50">
              <HiOutlineClock /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-50">
              <HiOutlineArchive /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-red-500 font-medium hover:bg-red-50">
              <HiOutlineTrash /> Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-[#1A332B]">{friend.days_since_contact}</h3>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-[#1A332B]">{friend.goal}</h3>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-[#1A332B]">{friend.next_due_date}</h3>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[#1A332B] mb-1">Relationship Goal</h4>
              <p className="text-gray-500">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
            </div>
            <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-semibold border border-gray-200 hover:bg-gray-100">
              Edit
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-[#1A332B] mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all">
                <div className="p-3 bg-gray-50 rounded-full text-2xl text-gray-700"><HiOutlinePhone /></div>
                <span className="text-sm font-medium text-gray-600">Call</span>
              </button>
              <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all">
                <div className="p-3 bg-gray-50 rounded-full text-2xl text-gray-700"><HiOutlineChatAlt2 /></div>
                <span className="text-sm font-medium text-gray-600">Text</span>
              </button>
              <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all">
                <div className="p-3 bg-gray-50 rounded-full text-2xl text-gray-700"><HiOutlineVideoCamera /></div>
                <span className="text-sm font-medium text-gray-600">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;