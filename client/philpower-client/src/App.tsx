
import { useState } from "react"
import Home from "./components/Home"
import SideBar from "./components/SideBar"

const App = () => {
  const [role, setRole] = useState<'owner' | 'worker' | null>(null)

  const handleLogin = (selectedRole: 'owner' | 'worker') => {
    setRole(selectedRole)
    console.log(selectedRole)
  }

  if (!role){
    return (
      <Home onLogin={handleLogin} />
    )
  }

  return (
    
    <SideBar role="worker" onLogout={() => console.log("logout")} />
  )
}

export default App