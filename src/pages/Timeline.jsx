import { useEffect, useState } from "react";
import { HiOutlinePhone, HiOutlineChatAlt2, HiOutlineVideoCamera, HiOutlineUserGroup, HiOutlineSearch } from "react-icons/hi";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [sortOrder, setSortOrder] = useState("newest"); 

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

  
  const processedActivities = activities
    .filter((item) => {
      const matchesFilter = filter === "All" || item.type === filter;
      const matchesSearch = 
        item.friendName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.type.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    
    .sort((a, b) => {
      return sortOrder === "newest" ? b.id - a.id : a.id - b.id;
    });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen bg-[#F8FAFB]">
      <h1 className="text-3xl font-bold text-[#1A332B] mb-8">Timeline</h1>

    
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        
        
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text"
            placeholder="Search by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A332B] text-sm"
          />
        </div>

        
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          <option value="All">All interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>

        
        <select 
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

    
      <div className="space-y-3">
        {processedActivities.length > 0 ? (
          processedActivities.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
              <div className="p-2 bg-gray-50 rounded-lg text-xl">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <h3 className="text-md font-semibold text-[#1A332B]">
                  {item.type} with {item.friendName}
                </h3>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">Nothing found, friend!</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;