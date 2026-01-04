import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'
import Sidebar from '../Components/Sidebar'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar/>
      <div className="flex-1">
        <Routes>
          <Route index element={<div className="p-6">Welcome to the dashboard</div>} />
          <Route path='addproduct' element={<AddProduct/>}/>
          <Route path='listproduct' element={<ListProduct/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin