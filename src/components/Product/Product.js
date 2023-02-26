import React, {useEffect, useState} from 'react';
import './product.css'

import {Link} from "react-router-dom";


const baseURL = "http://localhost:8000/products"
const Products = () => {
    //const {productId}=useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        // setProductData();
        fetch(baseURL).then((res) => {
            return res.json();

        }).then((response) => {
            console.log(response)
            setProduct(response)
        }).catch((err) => {
            console.log(err.message)
        })
    }, []);
    //
    // const setProductData = () => {
    //     //     axios.get(baseURL).then((response) => {
    //     //         setProduct(response.data);
    //     //         console.log(response)
    //     //     }).catch(error => {
    //     //         alert("Error Ocurred while loading data:" + error);
    //     //     });
    //     //
    //     // }
        const deleteProduct = (id) => {
            // console.log(id)
            //
            // axios.delete(`http://localhost:8000/products/${id}`).then((response)=>{
            //     alert('remove successfully.')
            //      window.location.reload()
            //
            // }).catch((err) => {
            //     console.log(err)
            // })
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
            <div className='navbar'>
                <Link to='/add' className='link_add'>Add New</Link>

                <div className='container'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>price</th>
                            <th>description</th>
                            <th>category</th>

                            <th></th>
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
                                    <Link to={`/edit/${item.id}`} className='link'>
                                        <i className='fas fa-edit'></i> Edit
                                    </Link>
                                </td>
                                <td>
                                    <button className='delete' type='submit'
                                            onClick={() => deleteProduct(item.id)}>
                                        <i className='fas fa-delete-left'></i>Delete
                                    </button>
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
