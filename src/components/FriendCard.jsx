import { Link } from "react-router-dom";
import { Calendar, Mail, Tag } from "lucide-react";

const FriendCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী কালার সেট করা
  const statusStyles = {
    "overdue": "bg-red-100 text-red-700 border-red-200",
    "almost due": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "on-track": "bg-green-100 text-green-700 border-green-200"
  };

  return (
    <Link to={`/friend/${friend.id}`} className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative mb-4">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-indigo-50 transition-all"
        />
        <span className={`absolute top-0 right-0 px-2 py-1 rounded-full text-[10px] font-bold uppercase border ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
        {friend.name}
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={14} />
          <span>Contacted {friend.days_since_contact} days ago</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {friend.tags.map((tag, index) => (
            <span key={index} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full py-2 bg-gray-50 text-gray-600 text-sm font-semibold rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
        View Profile
      </button>
    </Link>
  );
};

export default FriendCard;