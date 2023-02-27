import React, { useState} from 'react';
import { useNavigate} from "react-router-dom";
import './newProduct.css'

const AddProduct = () => {
    const [id,setId]=useState()
    const [title,setTitle]=useState()
    const [price,setPrice]=useState()
    const [description,setDescription]=useState()
    const [category,setCategory]=useState()
    const navigate = useNavigate();
    const handleSubmit=(e)=> {
        e.preventDefault();
        const productData = {id, title, price, description, category}
        fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(productData)
        }).then((res) => {
            alert('saved successfully.')
          navigate('/')

        }).catch((err) => {
            console.log(err)
        })
    }
        // useEffect(() => {
        //     handleSubmit()
        //     navigate('/')
        // }, []);


    return (
        <div className="add-product">
            <h2>Creating New Product</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="field-group">
                    <label htmlFor="title">Id: </label>
                    <input type="text" name="id" id="title" value={id} onChange={(e)=>{setId(e.target.value)}} required />
                </div>
                <div className="field-group">
                    <label htmlFor="title">title: </label>
                    <input type="text" name="id" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
                </div>
                <div className="field-group">
                    <label htmlFor="title">price: </label>
                    <input type="text" name="price" id="title" value={price}  onChange={(e)=>{setPrice(e.target.value)}} required />
                </div>
                <div className="field-group">
                    <label htmlFor="title">description: </label>
                    <input type="text" name="description" id="title" value={description}
                           onChange={(e)=>{setDescription(e.target.value)}} required />
                </div>
                <div className="field-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" id="category"  onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div className="field-group">
                    <button className='btn-add' type="submit">Add Products</button>
                </div>
            </form>
        </div>
    )
}


export default AddProduct;
