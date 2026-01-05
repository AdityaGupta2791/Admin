import { useNavigate } from 'react-router-dom'
import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'
import { useToast } from '../utils/ToastProvider'

const Navbar = () => {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const handleLogout = () => {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    } catch {
      // ignore storage errors
    }
    showToast('Logged out')
    navigate('/signin', { replace: true })
  }

  return (
    <header className="flex items-center justify-between px-[30px] md:px-[60px] py-[15px] bg-white shadow-[0_1px_3px_-2px_rgba(0,0,0,1)] mb-1">
      <img className="w-[150px] md:w-[200px]" src={navlogo} alt="" />
      <div className="flex items-center gap-4">
        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded">Logout</button>
        <img className="w-[60px] md:w-[75px]" src={navProfile} alt="" />
      </div>
    </header>
  )
}

export default Navbar