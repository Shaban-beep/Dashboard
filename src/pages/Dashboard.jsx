import React,{useState} from "react";
import DashboardContent from "../components/DashboardContent";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
}
  return (
    <div>
      <div className="flex flex-1 bg-gray-400">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 xl:pl-72 bg-gray-400">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-5">
            <DashboardContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
