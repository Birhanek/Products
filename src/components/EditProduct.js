import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import './components/editProduct.css';

const BASE__URL ="http://localhost:8000";

const navigate = useNavigate();
const EditProduct = () => {
    
  const productId = useParams();

  const [productData,setProductData] = useState({
    title:'',
    price:null,
    description:'',
    count:null,
    category:'men',
    rating:{
      rate:null,
      count:null
    }
  });
  const handleChange = (event)=>{
    event.preventDefault();
    setProductData((data)=>{
      return {...data,[event.target.name]:event.target.value};
    })
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    fetch(`${BASE__URL}/products/${productId.id}`,{
      method:'put',
      headers:{
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body:JSON.stringify(productData)
    },[])
  }
   
  return (
    <div className="add-product">
        <h2>Edit product </h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="title">title: </label>
          <input type="text" name="title" id="title" value={productData.title} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">price: </label>
          <input type="text" name="price" id="price" value={productData.price} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">rating: </label>
          <input type="number" name="rate" id="rate"placeholder='please enter rating 1 to 5' value={productData.price} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">count: </label>
          <input type="number" name="count" id="count" placeholder='please enter count' value={productData.count} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">description: </label>
          <input type="text" name="description" id="description" value={productData.description}
          onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="category">Category: </label>
          <select value={productData.category} name="category" id="category" onChange={handleChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="field-group">
            <button type="submit">Update product</button>
        </div>
        </form>
    </div>
  )
}

export default EditProduct
