"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const ProductDetailsPage = () => {

    const {id} = useParams()
    console.log(id)
    
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const baseurlPexels = 'https://api.pexels.com/v1/photos/';
  const token = 'A6klweMzmOZwMlZn0udDwPKQ0h6G1yOAZQ3bFpSoIVFMtkwumW27FSxc';

  useEffect(() => {
    const fetchDataPexelsDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseurlPexels}${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const result = await response.json();
        setProductDetails(result);
      } catch (error) {
        console.log('Error', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDataPexelsDetails();
    }
  }, [id, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h3>{productDetails.width} - {productDetails.height}</h3>
      <img src={productDetails?.src?.original} alt={`Product ${id}`} className=""/>
    </div>
  );
};

export default ProductDetailsPage;
