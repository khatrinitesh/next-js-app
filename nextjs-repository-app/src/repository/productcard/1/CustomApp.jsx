import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { API_ENDPOINT_JSONPLACEHOLDER_USERS } from './api_constants';

const CustomApp = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors,setErrors] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_ENDPOINT_JSONPLACEHOLDER_USERS);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status code: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setErrors(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);


    if (loading) {
        return <div>Loading...</div>;
    }
    if(errors){
        return(
            <div>{errors}</div>
        )
    }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
};

export default CustomApp;
