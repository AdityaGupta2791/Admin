import { useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);
    

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />

      </div>
    </div>

  )
}

export default ListProduct