import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const cards = [
  { title: "Weekly sales", value: "714k", change: "+2.6%", color: "green" },
  { title: "New users", value: "1.35m", change: "-0.1%", color: "purple" },
  { title: "Purchase orders", value: "1.72m", change: "+2.8%", color: "yellow" },
  { title: "Messages", value: "234", change: "+3.6%", color: "red" }
];

const dataPie = [
  { name: "America", value: 43.8, color: "#00a76f" },
  { name: "Asia", value: 31.3, color: "#ffeb3b" },
  { name: "Europe", value: 18.8, color: "#0056b3" },
  { name: "Africa", value: 6.3, color: "#ff3d00" }
];

const dataBar = [
  { name: "Jan", TeamA: 40, TeamB: 50 },
  { name: "Feb", TeamA: 30, TeamB: 70 },
  { name: "Mar", TeamA: 20, TeamB: 40 },
  { name: "Apr", TeamA: 35, TeamB: 65 },
  { name: "May", TeamA: 65, TeamB: 40 },
  { name: "Jun", TeamA: 50, TeamB: 35 },
  { name: "Jul", TeamA: 30, TeamB: 20 },
  { name: "Aug", TeamA: 25, TeamB: 70 },
  { name: "Sep", TeamA: 45, TeamB: 25 }
];

const dataRadar = [
  { subject: "English", A: 90, B: 65, C: 50, fullMark: 100 },
  { subject: "History", A: 80, B: 70, C: 75, fullMark: 100 },
  { subject: "Physics", A: 65, B: 40, C: 80, fullMark: 100 },
  { subject: "Geography", A: 50, B: 90, C: 45, fullMark: 100 },
  { subject: "Chinese", A: 95, B: 60, C: 55, fullMark: 100 },
  { subject: "Math", A: 70, B: 85, C: 40, fullMark: 100 }
];

function dashbord(){
  const cards = [
    { title: "Weekly sales", value: "714k", change: "+2.6%", color: "green" },
    { title: "New users", value: "1.35m", change: "-0.1%", color: "purple" },
    { title: "Purchase orders", value: "1.72m", change: "+2.8%", color: "yellow" },
    { title: "Messages", value: "234", change: "+3.6%", color: "red" },
  ];
  const dataPie = [
    { name: "America", value: 43.8, color: "#00a76f" },
    { name: "Asia", value: 31.3, color: "#ffeb3b" },
    { name: "Europe", value: 18.8, color: "#0056b3" },
    { name: "Africa", value: 6.3, color: "#ff3d00" }
  ];
  
  const dataBar = [
    { name: "Jan", TeamA: 40, TeamB: 50 },
    { name: "Feb", TeamA: 30, TeamB: 70 },
    { name: "Mar", TeamA: 20, TeamB: 40 },
    { name: "Apr", TeamA: 35, TeamB: 65 },
    { name: "May", TeamA: 65, TeamB: 40 },
    { name: "Jun", TeamA: 50, TeamB: 35 },
    { name: "Jul", TeamA: 30, TeamB: 20 },
    { name: "Aug", TeamA: 25, TeamB: 70 },
    { name: "Sep", TeamA: 45, TeamB: 25 }
  ];
    return(
      <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Hi, Welcome back 👋</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className={`bg-${card.color}-100 p-6 rounded-xl shadow-md`}>
            <div className="flex justify-between items-center">
              <span className={`text-${card.color}-700 font-semibold`}>{card.title}</span>
              <span className={`text-sm text-${card.color}-600`}>{card.change}</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">{card.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Current visits</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Website visits</h2>
          <p className="text-sm text-gray-500">(+43%) than last year</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="TeamA" fill="#00a76f" />
              <Bar dataKey="TeamB" fill="#ffeb3b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Current subject</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Series 1" dataKey="A" stroke="#00a76f" fill="#00a76f" fillOpacity={0.6} />
              <Radar name="Series 2" dataKey="B" stroke="#ffeb3b" fill="#ffeb3b" fillOpacity={0.6} />
              <Radar name="Series 3" dataKey="C" stroke="#00bcd4" fill="#00bcd4" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
  
    

}
export default dashbord