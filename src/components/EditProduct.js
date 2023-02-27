import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {

  

  const productId=useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/products/${productId.id}`).then((res)=>{
      return res.json()

    }).then((response)=>{

      setId(response.id)
      setTitle(response.title)
      setPrice(response.price)
      setDescription(response.description)
      setCategory(response.category)
    }).catch((err)=>{
      console.log(err.message)
    })

  },[productId])

  const [id,setId]=useState()
  const [title,setTitle]=useState()
  const [price,setPrice]=useState()
  const [description,setDescription]=useState()
  const [category,setCategory]=useState()

  const navigate = useNavigate();
  const handleSubmit=(e)=> {
    e.preventDefault();
    const productData = {id, title, price, description, category}
    fetch(`http://localhost:8000/products/${productId.id}`,{
      method: "PUT",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(productData)
    }).then((res) => {
      alert('Updated successfully.')
      navigate('/')
      console.log(productData)
    }).catch((err) => {
      console.log(err)
    })
  }




  return (
      <div className="add-product">
        <h2 className='title'>Edit product </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Id </label>
            <input type="text" name="id" id="title" value={id} onChange={(e)=>{setId(e.target.value)}} />
          </div>
          <div className="field-group">
            <label htmlFor="title">title: </label>
            <input type="text" name="title" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
          </div>
          <div className="field-group">
            <label htmlFor="title">price: </label>
            <input type="text" name="price" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} required />
          </div>

          <div className="field-group">
            <label htmlFor="title">description: </label>
            <input type="text" name="description" id="description" value={description}
                   onChange={(e)=>{setDescription(e.target.value)}} required />
          </div>
          <div className="field-group">
            <label htmlFor="category">Category: </label>
            <select value={category} name="category" id="category" onChange={(e)=>{setCategory(e.target.value)}}>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="field-group">
            <button className='btn-update' type="submit">Update product</button>
          </div>
        </form>
      </div>
  )
}


export default EditProduct
