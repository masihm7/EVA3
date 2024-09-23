
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/login";
import AdminDashoard from "./components/AdminDashborad";
import StudentDashoard from "./components/studentdashboard";
import TeacherDashoard from "./components/teacherdashboard";


const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path= "/login" element={ <Login/>}/>
        <Route path= "/Dashboard" element={ <Dashboard/>}/>
      </Routes>
      </Router>
    </AuthProvider>
  )
}


const Dashboard = () => {
  const {user} = useAuth()
  if(!user){
    return <Login/>
  }
  switch (user.role){
    case 'admin':
      return <AdminDashoard/>
    case 'teacher':
      return <TeacherDashoard/>
    default:
      return <StudentDashoard/>
  }
}

export default App