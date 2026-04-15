import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();


  const statusStyles = {
    "overdue": "bg-[#FF4D4D] text-white",
    "almost due": "bg-[#FFB347] text-white",
    "on-track": "bg-[#1A332B] text-white",
  };

  
  const getFallbackImage = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=80`;
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-all duration-300"
    >
    
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100 flex items-center justify-center">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-full h-full object-cover"
          
          onError={(e) => { e.target.src = getFallbackImage(friend.name); }}
        />
      </div>

      
      <h3 className="text-lg font-bold text-[#1A332B] mb-1">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-[#E8F5E9] text-[#2D5A4C] text-xs font-bold rounded-full uppercase">
            {tag}
          </span>
        ))}
      </div>
      <div className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize ${statusStyles[friend.status]}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;