import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  ClipboardList,
  Trophy,
} from "lucide-react";

interface SideBarProps {
  role: "owner" | "worker";
  onLogout: () => void;
}

const SideBar = ({ role, onLogout }: SideBarProps) => {
  const MenuItems = [
    ...(role === "owner"
      ? [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard }]
      : []),
    { id: "items", label: "Items", icon: Package },
    { id: "sales-log", label: "Sales Log", icon: ShoppingCart },
    { id: "sales-history", label: "Sales History", icon: ClipboardList },
    ...(role === "worker"
      ? [{ id: "leaderboard", label: "LeaderBoard", icon: Trophy }]
      : []),
    ...(role === "owner"
      ? [{ id: "report", label: "Reports", icon: BarChart3 }]
      : []),
    { id: "settings", label: "Settings", icon: Settings },
  ];
  return (
    <div className="w-64 bg-white w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 border-gray-200 h-screen flex flex-col fixed">
      <div className="border-b p-6 border-gray-200">
        <h1 className="flex m-5 mb-3 text-2xl font-semibold text-gray-900">
          PhilPower.
        </h1>

        <div className="flex-1 m-1 p-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
          <p className="text-center">{role} Portal</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-1 px-4 py-6">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
          MENU
        </div>

        {MenuItems.map((items) => {
          const Icon = items.icon;
          return (
            <button
              key={items.id}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 w-full transition-colors"
              onClick={() => console.log(items.label)}
            >
              <Icon className="text-gray-400 w-6 h-6" />
              {items.label}
            </button>
          );
        })}

        <div className="p-4 border-t border-gray-200 mt-23">
          <button
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 w-full transition-colors"
            onClick={() => onLogout}
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
