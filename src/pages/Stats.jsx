import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { BarChart3 } from "lucide-react";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];
    
    
    const counts = timeline.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(counts).map(key => ({
      name: key,
      value: counts[key]
    }));

    setData(chartData);
  }, []);

  const COLORS = ["#4F46E5", "#10B981", "#8B5CF6"]; // Indigo, Green, Purple

  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 bg-indigo-600 text-white rounded-2xl">
          <BarChart3 size={28} />
        </div>
        <h1 className="text-3xl font-black text-gray-800">Friendship Analytics</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
        
        {/* Left Side: Chart */}
        <div className="h-[300px] w-full">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 font-medium">
              No data available. Log some interactions first!
            </div>
          )}
        </div>

        {/* Right Side: Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Interaction Breakdown</h3>
          <p className="text-gray-500 leading-relaxed">
            This chart shows the distribution of your communication methods. 
            Keep a healthy balance between calls, texts, and video chats to maintain strong bonds.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="font-bold text-gray-700">{item.name}s</span>
                <span className="text-indigo-600 font-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;