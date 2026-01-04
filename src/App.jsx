import { useLocation } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Admin from './Pages/Admin'
import Signin from './Pages/Signin'
import NotFound from "./Pages/NotFound"
import RequireAdmin from './utils/RequireAdmin'

function App() {
  const location = useLocation()
  const hideNavbar = location.pathname === '/signin'

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard/*" element={<RequireAdmin><Admin/></RequireAdmin>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
