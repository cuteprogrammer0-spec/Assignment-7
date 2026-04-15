import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    
    // ডাটা ফরম্যাট করা
    const chartData = [
      { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
      { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
      { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
    ];
    setData(chartData);
  }, []);

  // তোমার ইমেজের কালার অনুযায়ী
  const COLORS = ['#9333ea', '#1A332B', '#22c55e']; 

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen bg-[#F8FAFB]">
      <h1 className="text-3xl font-bold text-[#1A332B] mb-8">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-gray-500 font-semibold mb-10">By Interaction Type</p>
        
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80} // ডোনাট লুকের জন্য
                outerRadius={110}
                paddingAngle={8}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                formatter={(value) => <span className="text-gray-600 font-medium text-sm ml-1">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;