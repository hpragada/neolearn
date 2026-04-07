import MainLayout from "../layout/MainLayout";
import PerformanceChart from "../components/PerformanceChart";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <MainLayout>
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-wide">
          Dashboard
        </h1>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-400">👤 Mythri</div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">

        <div className="bg-[#1A1A1A] p-6 rounded-2xl hover:scale-[1.02] transition">
          <h3 className="text-gray-400 text-sm">Quiz Performance</h3>
          <p className="text-3xl font-bold mt-2 text-primary">85%</p>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-2xl hover:scale-[1.02] transition">
          <h3 className="text-gray-400 text-sm">Accuracy</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">90%</p>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-2xl hover:scale-[1.02] transition">
          <h3 className="text-gray-400 text-sm">Weak Areas</h3>
          <p className="text-lg mt-2 text-yellow-400">Automata</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#1A1A1A] p-6 rounded-2xl">
          <PerformanceChart />
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-2xl">
          <h3 className="text-gray-400 mb-4">Progress</h3>
          
          <div className="w-full bg-[#333] h-3 rounded-full">
            <div className="bg-primary h-3 rounded-full w-[70%]"></div>
          </div>

          <p className="mt-3 text-sm text-gray-400">
            70% completed
          </p>
        </div>

      </div>

      {/* Floating AI Button */}
      <Link to="/chat">
        <div className="fixed bottom-6 right-6 bg-primary p-4 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
          🤖
        </div>
      </Link>

    </MainLayout>
  );
}