
import { useState } from "react"
import Home from "./components/Home"
import SideBar from "./components/SideBar"

const App = () => {
  const [role, setRole] = useState<'Owner' | 'Worker' | null>(null)

  const handleLogin = (selectedRole: 'Owner' | 'Worker') => {
    setRole(selectedRole)
    console.log(selectedRole)
  }

  const handleLogout = () => {
    setRole(null)
  }

  if (!role){
    return (
      <Home onLogin={handleLogin} />
    )
  }

  return (
    
    <SideBar role={role} onLogout={handleLogout} />
  )
}

export default App