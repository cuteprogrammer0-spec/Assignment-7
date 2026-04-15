import { useEffect, useState } from "react";
import { HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera, HiOutlineUserGroup } from "react-icons/hi";

const Timeline = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline") || "[]");
    setActivities(data);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <HiOutlinePhone className="text-blue-500" />;
      case 'Text': return <HiOutlineChatAlt2 className="text-green-500" />;
      case 'Video': return <HiOutlineVideoCamera className="text-purple-500" />;
      default: return <HiOutlineUserGroup />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen bg-[#F8FAFB]">
      <h1 className="text-3xl font-bold text-[#1A332B] mb-8">Timeline</h1>

      {activities.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl text-center border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">No interactions recorded yet. Check in with a friend!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-gray-50 rounded-full text-2xl">
                {getIcon(item.type)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A332B]">
                  {item.type} with {item.friendName}
                </h3>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;