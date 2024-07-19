import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
      <ContactPage/>
    </>
  )
}

export default CustomApp

const ContactPage = () => {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to <a href="mailto:example@example.com">email us</a>.</p>
      </div>
    );
  };