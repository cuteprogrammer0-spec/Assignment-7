import { useEffect, useState } from "react";
import { HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera, HiOutlineUserGroup } from "react-icons/hi";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline") || "[]");
    setActivities(data);
  }, []);

  
  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <HiOutlinePhone className="text-gray-600" />;
      case 'Text': return <HiOutlineChatAlt2 className="text-gray-600" />;
      case 'Video': return <HiOutlineVideoCamera className="text-gray-600" />;
      default: return <HiOutlineUserGroup className="text-gray-600" />;
    }
  };

  
  const filteredActivities = filter === "All" 
    ? activities 
    : activities.filter(a => a.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen bg-[#F8FAFB]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-[#1A332B]">Timeline</h1>
        
        
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1A332B]"
        >
          <option value="All">All interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm"
            >
              <div className="p-2 bg-gray-50 rounded-lg text-xl">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <h3 className="text-md font-semibold text-[#1A332B]">
                  <span className="font-bold">{item.type}:</span> with {item.friendName}
                </h3>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">কোনো রেকর্ড খুঁজে পাওয়া যায়নি </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;