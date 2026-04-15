import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center transition-all hover:shadow-md">
      {/* বড় গোলাকার ছবি */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
        <img 
          src={friend.image} 
          alt={friend.name} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
        />
      </div>

      <h3 className="text-xl font-bold text-[#1e3a34]">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{friend.lastSeen}</p>
      
      {/* ট্যাগের অংশ */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {friend.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black tracking-wider uppercase">
            {tag}
          </span>
        ))}
      </div>

      {/* স্ট্যাটাস ব্যাজ (Almost Due / Overdue) */}
      <div className="mb-6">
        <span className={`px-4 py-1.5 rounded-full text-white text-[11px] font-bold shadow-sm ${
          friend.status === 'Overdue' ? 'bg-[#ef4444]' : 
          friend.status === 'Almost Due' ? 'bg-[#f59e0b]' : 'bg-[#10b981]'
        }`}>
          {friend.status}
        </span>
      </div>
      
      <Link 
        to={`/friend/${friend.id}`} 
        className="w-full py-2.5 bg-[#f8fafc] text-gray-600 rounded-xl text-sm font-bold hover:bg-[#1e3a34] hover:text-white transition-all border border-gray-100"
      >
        View Details
      </Link>
    </div>
  );
};

export default FriendCard;