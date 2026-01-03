import { Link } from 'react-router-dom'
import add_product_icon from '../assets/Product_Cart.svg'
import list_product_icon from '../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <aside className="flex flex-row md:flex-col items-center md:items-start gap-[20px] md:max-w-[250px] w-full bg-white md:h-screen pt-[30px] px-0">
      <Link to={'/addproduct'} className="w-auto">
        <div className="flex items-center justify-center md:justify-start gap-[20px] md:mx-[20px] px-[10px] py-[5px] rounded-[6px] bg-[#f6f6f6] cursor-pointer">
          <img src={add_product_icon} alt="" className="w-6 h-6" />
          <p className="hidden md:block text-sm font-medium text-gray-700">Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} className="w-auto">
        <div className="flex items-center justify-center md:justify-start gap-[20px] md:mx-[20px] px-[10px] py-[5px] rounded-[6px] bg-[#f6f6f6] cursor-pointer">
          <img src={list_product_icon} alt="" className="w-6 h-6" />
          <p className="hidden md:block text-sm font-medium text-gray-700">Product List</p>
        </div>
      </Link>
    </aside>
  )
}

export default Sidebar