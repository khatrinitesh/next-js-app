"use client"
import Banner from "@/components/banner"
import {useState} from 'react';

const Contact = () => {
  // data - email and password
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  // errors
  const [errors,setErrors] = useState({
    email:'',
    password:'',
    isChecked:''
  })
  // checked and unchecked - boolean with true/false
  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (email) => {
    // simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleInputChange  = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    // clear existing errors when user starts typing 
   setErrors({
    ...errors,
    [name]:''
   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate email 
    if(!validateEmail(formData.email)){
      setErrors({
        ...errors,
        email:'Please enter a valid email address',
      });
      return;
    }

    // validate password (you can add more complex pwd validation logic)
    if(formData.password.length < 6){
    setErrors({
      ...errors,
      password:'Password must be at least 6 characters long'
    });
    return;
  }

   // If validation passes, you can proceed with form submission or other actions
   console.log('Form Submitted Successfully',formData,isChecked);

  }

  const handleCheckboxChange  =() => {
    setIsChecked(!isChecked);
    if(isChecked){
       // If the checkbox is unchecked, show errors
      setErrors({
        ...errors,
        isChecked:'checkbox is unchecked!'
      });

       // Perform some action when the checkbox is unchecked
      // For example, you can reset a value or clear a field
      setFormData({
        email:'',
        password:''
      });
    }
    else{
       // If the checkbox is checked, clear the errors
      setErrors({
        ...errors,
        isChecked:''
      })
    }
  }


  return (
    <div>
      <Banner bannerStyle='bg-[red]' title="Contact" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          maxLength={6}
        />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>
      <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Check me!
          </label>
          <span style={{ color: 'red' }}>{errors.isChecked}</span>
        </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact
