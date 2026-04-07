import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", score: 60 },
  { name: "Tue", score: 75 },
  { name: "Wed", score: 70 },
  { name: "Thu", score: 85 },
  { name: "Fri", score: 90 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-[#1A1A1A] p-5 rounded-2xl">
      <h2 className="text-gray-400 text-sm mb-4">Performance</h2>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#4F46E5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}