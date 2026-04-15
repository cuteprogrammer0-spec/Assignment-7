import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Calendar, Filter } from "lucide-react";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
  
    const storedData = JSON.parse(localStorage.getItem("timeline")) || [];
    setActivities(storedData);
  }, []);


  const filteredActivities = filter === "All" 
    ? activities 
    : activities.filter(act => act.type === filter);


  const getIcon = (type) => {
    switch (type) {
      case "Call": return <Phone className="text-blue-500" size={20} />;
      case "Text": return <MessageSquare className="text-green-500" size={20} />;
      case "Video": return <Video className="text-purple-500" size={20} />;
      default: return <Calendar size={20} />;
    }
  };

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <h1 className="text-3xl font-black text-gray-800">Interaction Timeline</h1>
        
        {/* Filter Buttons */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm">
          {["All", "Call", "Text", "Video"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                filter === item ? "bg-indigo-600 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredActivities.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No interactions logged yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredActivities.map((item) => (
            <div key={item.id} className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-10 before:bottom-[-24px] before:w-0.5 before:bg-gray-100 last:before:hidden">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-indigo-100 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.type} with {item.friendName}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-1 mt-0.5">
                      <Calendar size={12} /> {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;