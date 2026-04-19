import { Shield, ArrowRight, User } from "lucide-react";

const Home = () => {
  return (
    <>
      <header className="px-8 py-5 bg-white">
        <h1 className="text-3xl font-semibold text-gray-900">PP.</h1>
      </header>

      <main className="min-h-screen items-center justify-center p-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
            PhilPower.
          </h1>
          <p className="text-lg text-gray-500">
            Welcome to PhilPower. <br /> Dealer in all kinds of engine and
            engine parts.
          </p>

          {/* Login portals */}
          <div className="grid md:grid-cols-2 gap-15 max-w-2xl mx-auto mt-25">

            {/* Owner portal */}
            <button className="group p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left flex flex-col items-start">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
            
              <h3 className="pt-3 text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                Owner's Portal
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" />
              </h3>

              <p className="text-sm text-gray-500">
                Full access to dashboard, analytics, inventory, sales, and
                system settings.
              </p>
            </button>

            {/* Workers portal */}
             <button className="group p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <User className="w-6 h-6 text-black" />
              </div>
            
              <h3 className="pt-3 text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                Workers' Portal
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" />
              </h3>

              <p className="text-sm text-gray-500">
                Access to manage inventory items and process daily sales.
              </p>
            </button>
             
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
