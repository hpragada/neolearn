import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  FileText,
  BarChart3,
  MessageCircle
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Modules", icon: BookOpen, path: "/modules" },
    { name: "Quizzes", icon: ClipboardList, path: "/quizzes" },
    { name: "Notes", icon: FileText, path: "/notes" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "AI Tutor", icon: MessageCircle, path: "/chat" },
  ];

 return (
  <div className="w-64 h-screen px-6 py-8 flex flex-col glass">

  <h1 className="text-2xl font-semibold mb-10 tracking-wide">
  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
    NeoLearn
  </span>
</h1>
    {/* Menu */}
    <ul className="space-y-4">
      {menu.map((item, index) => {
        const Icon = item.icon;
        const active = location.pathname === item.path;

        return (
          <Link to={item.path} key={index}>
            <li
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] transition-all duration-200
              ${
                active
                  ? "bg-white/10 text-white shadow-lg"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </li>
          </Link>
        );
      })}
    </ul>

    <div className="mt-auto text-xs text-gray-400">
      Smart Learning ✨
    </div>
  </div>
);
}