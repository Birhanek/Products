import React, {useEffect, useState} from 'react';
import './product.css'
import {Link} from "react-router-dom";

import {FaPen, FaTrash} from 'react-icons/fa';


const baseURL = "http://localhost:8000/products"
const Products = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        
        fetch(baseURL).then((res) => {
            return res.json();

        }).then((response) => {
            console.log(response)
            setProduct(response)
        }).catch((err) => {
            console.log(err.message)
        })
    }, []);

    const deleteProduct = (id) => {  
            fetch(`http://localhost:8000/products/${id}`, {
                method: "DELETE",

            }).then((res) => {
                alert('remove successfully.')
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })


        }




        return (
            <div className='products'>
                <h1 className='products__title'>Products</h1>
                <Link to='/add' className='link__add'>Create New Product</Link>
                <div className='container'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {product && product.map(item =>

                            <tr key={item.id}>
                                <td>{item.id} </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>
                                    <div className='editing__buttons'>
                                    <Link to={`/edit/${item.id}`} className='btn-edit'><FaPen />
                                    </Link>
                                    <button className='btn-delete' type='submit'
                                            onClick={() => deleteProduct(item.id)}><FaTrash/>
                                    </button>
                                    </div>
                                    
                                </td>
                            </tr>
                        )}


                        </tbody>
                    </table>
                </div>
            </div>
        );
};

export default Products;
