import { useState } from "react";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Inventory from "./components/Inventory";
import Dashboard from "./components/Dashboard";
import SalesLog from "./components/SalesLog";
import SalesHistory from "./components/SalesHistory";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import LeaderBoard from "./components/LeaderBoard";

const App = () => {
  const [role, setRole] = useState<"Owner" | "Worker" | null>(null);
  const [activeTab, setActiveTab] = useState("items");

  const handleLogin = (selectedRole: "Owner" | "Worker") => {
    setRole(selectedRole);
    setActiveTab(selectedRole == "Owner" ? "dashboard" : "items");
  };

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) {
    return <Home onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      <SideBar
        role={role}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 ml-64 p-8">
        {activeTab === "dashboard" && role === "Owner" && <Dashboard />}
        {activeTab === "items" && <Inventory />}
        {activeTab === "sales-log" && <SalesLog />}
        {activeTab === "sales-history" && <SalesHistory />}
        {activeTab === "leaderboard" && <LeaderBoard />}
        {activeTab === "report" && <Reports />}
        {activeTab === "settings" && <Settings />}
      </main>
    </div>
  );
};

export default App;
