import { LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <div className="w-64 bg-white w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 border-gray-200 h-screen flex flex-col fixed">
      <h1 className="flex justify-center m-5 mb-2 text-2xl font-semibold text-gray-900">
        PhilPower.
      </h1>
      
      <div className="flex justify-center m-1 px-2.5 mr-18 ml-18 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
        <p className="text-center">Worker Portal</p>
      </div>

      <div className="flex-1 py-6 px-4 flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">MENU</div>

        <div>
          <button>
            <LogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
