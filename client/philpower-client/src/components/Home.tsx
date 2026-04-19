import React from 'react'

const Home = () => {
  return (
     <>
    <header className="bg-white">
Header here
    </header>
    <main className="min-h-screen items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
          PhilPower 
        </h1>
        <p>
    Welcome to PhilPower. Dealer in all kinds of engine and engine parts. 
        </p>

        {/* Login portals */}
<div className="grid md:grid-cols-2 gap-6">
        {/* Owner portal */}
        <div>
          <button>
            Owner
          </button>
        </div>

        {/* Workers portal */}
        <div>
          <button>
            Workers
          </button>
        </div>
</div>

      </div>
    </main>
    </>
  )
}

export default Home