import { useState } from 'react'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);
    

  return (
    <div className='flex-1 p-6'>
      <h1 className="text-2xl font-semibold mb-4">All Products List</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <div className="min-w-[700px] flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-b">
          <p className="w-24">Products</p>
          <p className="w-48">Title</p>
          <p className="w-24">Old Price</p>
          <p className="w-24">New Price</p>
          <p className="w-32">Category</p>
          <p className="w-16">Remove</p>
        </div>
        <div className="divide-y">
          <hr />
        </div>
      </div>
    </div>

  )
}

export default ListProduct