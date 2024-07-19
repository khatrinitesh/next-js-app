import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <CouponComponent/>
    </>
  )
}

export default CustomApp

// Custom hook for managing coupons
const useCoupon = () => {
     // State to hold the applied coupon code
  const [couponCode, setCouponCode] = useState('');
  
  // State to hold the discount amount
  const [discount, setDiscount] = useState(0);
  
  // Function to apply a coupon
  const applyCoupon = (code) => {
    // Simulate coupon validation (You can replace this with your actual validation logic)
    if (code === 'SUMMER10') {
      // If valid, apply a 10% discount
      setDiscount(10);
      setCouponCode(code);
    } else {
      // If not valid, reset discount
      setDiscount(0);
      setCouponCode('');
    }
  };
  
  // Function to remove applied coupon
  const removeCoupon = () => {
    setDiscount(0);
    setCouponCode('');
  };

  return {
    couponCode,
    discount,
    applyCoupon,
    removeCoupon
  };
};

const CouponComponent = () => {
    const { couponCode, discount, applyCoupon, removeCoupon } = useCoupon();

    return (
      <div>
        <h2>Apply Coupon</h2>
        <input type="text" onChange={(e) => applyCoupon(e.target.value)} placeholder="Enter coupon code" />
        <button onClick={removeCoupon}>Remove Coupon</button>
  
        {couponCode && <p>Coupon applied: {couponCode}</p>}
        {discount > 0 && <p>Discount applied: {discount}%</p>}
      </div>
    );
  };


