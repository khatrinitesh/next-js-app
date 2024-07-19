import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
      <Navbar/>
    </>
  )
}

export default CustomApp

const Navbar = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
      // Reset form fields after submission
      setFormData({
        email: '',
        password: ''
      });
    };
  
    return (
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-xl">Logo</a>
            </div>
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="flex">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="mr-2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                  className="mr-2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">Login</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  };