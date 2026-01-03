import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-[30px] md:px-[60px] py-[15px] bg-white shadow-[0_1px_3px_-2px_rgba(0,0,0,1)] mb-1">
      <img className="w-[150px] md:w-[200px]" src={navlogo} alt="" />
      <img className="w-[60px] md:w-[75px]" src={navProfile} alt="" />
    </header>
  )
}

export default Navbar