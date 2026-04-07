import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-[#0D0D0D] text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}