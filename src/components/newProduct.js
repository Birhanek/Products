import React, { useState} from 'react';
import { useNavigate} from "react-router-dom";
import './newProduct.css'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const id=uuidv4();
    const [title,setTitle]=useState()
    const [price,setPrice]=useState()
    const [description,setDescription]=useState()
    const [category,setCategory]=useState()
    const [validName,setValidationName]=useState("")
    const [validatePrice,setValidatePrice]=useState("")
    const navigate = useNavigate();

    const handleSubmit=(e)=> {
        e.preventDefault();
        const productData = {id, title, price, description, category}
        if(title.length<3){
            setValidationName("enter valid price")
        }
        else if(validatePrice <0){
            setValidatePrice("enter valid price")
        }
        else{
            fetch("http://localhost:8000/products", {
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(productData)
            }).then((res) => {
                alert('saved successfully.')
                console.log(res)
                navigate('/')

            }).catch((err) => {
                console.log(err)
            })
        }
        }





        // useEffect(() => {
        //     handleSubmit()
        //     navigate('/')
        // }, []);


    return (
        <div className="AddProduct">
            <h2>New Product Insert</h2>
            <div className='add_container'>
                <form action="" onSubmit={handleSubmit}>
                    {/*<div className="field-group">*/}
                    {/*    <label htmlFor="title">Id: </label>*/}
                    {/*    <input type="text" name="id" id="title" />*/}
                    {/*</div>*/}
                    <div className="field-group">
                        <label htmlFor="title">title: {validName ? <p>{validName}</p> : " "} </label>
                        <input type="text" name="id" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="title">price: {validatePrice ? <p>{validatePrice}</p>:" "} </label>
                        <input type="text" name="price" id="title" value={price}   onChange={(e)=>{setPrice(e.target.value)}} required />
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
                        <button type="submit">Add Products</button>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default AddProduct;
