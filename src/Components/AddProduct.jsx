import upload_area from '../assets/upload_area.svg'
import { useState } from 'react'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:4000';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "", 
    old_price: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) =>{
    setProductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch(`${SERVER_URL}/upload`,{
      method: 'POST',
      headers:{
        Accept: 'application/json'
      },
      body:formData,
    }).then((res) => res.json()).then((data) => {responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch(`${SERVER_URL}/addproduct`,{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
      }).then((res) => res.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed")
      })
    }
  }

  return (
    <div className="w-full max-w-[800px] bg-white rounded-[6px] px-[50px] py-[30px] mx-[30px] my-[20px] box-border">
      <div className="w-full text-[#7b7b7b] text-[16px] mb-4">
        <p className="mb-2">Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' className="w-full h-[50px] rounded-[4px] pl-[15px] border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Price</label>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' className="w-full h-[50px] rounded-[4px] pl-[15px] border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]" />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Offer Price</label>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' className="w-full h-[50px] rounded-[4px] pl-[15px] border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]" />
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2">Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="p-[10px] w-[100px] h-[50px] text-[14px] text-[#7b7b7b] border border-[#c3c3c3] rounded-[4px]">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">kid</option>
        </select>
      </div>

      <div className="w-full text-[#7b7b7b] text-[16px] mt-4">
        <label htmlFor="file-input" className="inline-block cursor-pointer">
          <img className='h-[120px] w-[120px] rounded-[10px] object-contain my-[10px]' src={image?URL.createObjectURL(image):upload_area} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>

      <button onClick={Add_Product} className='mt-[20px] w-[160px] h-[50px] rounded-[6px] bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-medium'>Add</button>
    </div>
  )
}

export default AddProduct