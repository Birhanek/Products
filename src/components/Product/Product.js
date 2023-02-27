import React, {useEffect, useState} from 'react';
import './product.css'
import {Link} from "react-router-dom";

import {FaPen, FaTrash} from 'react-icons/fa';



const baseURL = "http://localhost:8000/products"
const Products = () => {
    const [product, setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]= useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(baseURL).then((res) => {
            if(!res.ok){
                throw new Error('Resource Not Found')
            }
            return res.json();

        }).then((data) => {
          
            setProduct(data)
            setIsLoading(false)
            setError([])

        }).catch((err) => {
            console.log(err.message)
            setProduct([])
            setIsLoading(false)
            setError(err.message)
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
                {isLoading && <p>Loading ...</p>}
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
                {error && <p>{error}</p>}
            </div>
        );
};

export default Products;
