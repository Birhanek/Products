import React, {useState,useEffect} from 'react';

import './CreateProduct.css';


const CreateProduct = () => {

    const [product, setProduct] = useState({
        title:'',
        price: '',
        rating:'',
        count:'',
        description: '',
        category: 'men'
       
      });
    
      const handleChange = (e) => {
        // update the product state with the recent input value
        setProduct((previosState) =>{
              return { ...previosState,[e.target.name]:e.target.value}
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        //props.newProduct(product);
        console.log(product);
        
  





        // pass the new product data to App.js from here
        setProduct({
          title: '',
          price: '',
          rating:'',
          count:'',
          description: '',
          category: 'men'
          
        });
      };
     
      useEffect(() => {
        // setProductData();
        fetch('http://localhost:8000/products', {
            method: 'POST',
            body: JSON.stringify({
                title:product.title,
                price:product.price,
                rating:{
                    rate:product.rating,
                    count:product.count },
                description:product.description,
                category: product.category
               
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                console.log(err.message)
            });

       
    }, []);
    





  return (
    <div className="AddProduct">
        <h2>New Product Isertion</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="title">title: </label>
          <input type="text" name="title" id="title" value={product.title} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">price: </label>
          <input type="text" name="price" id="title" value={product.price} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">rating: </label>
          <input type="text" name="rating" id="title"placeholder='please enter rating 1 to 5' value={product.rating} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">count: </label>
          <input type="text" name="count" id="title" placeholder='please enter count' value={product.count} onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="title">description: </label>
          <input type="text" name="description" id="title" value={product.description} 
          onChange={handleChange} required />
        </div>
        <div className="field-group">
          <label htmlFor="category">Category: </label>
          <select name="category" id="category" onChange={handleChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="field-group">
            <button type="submit">Add Prpducts</button>
        </div>
        </form>
    </div>
  )
}

export default CreateProduct