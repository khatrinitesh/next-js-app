import React,{useState} from "react";
// import './style.css';

const CustomApp = () => {
  return (
    <>
    <LoginForm/>
    </>
  )
};

export default CustomApp;

const LoginForm = () => {
    const [formData,setFormdata] = useState({
        email:'',
        password:''
    });

    const [errors,setErrors] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        let errorsObj = {};
        if (!formData.email) {
          errorsObj.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errorsObj.email = 'Email is not valid';
        }
        if (!formData.password) {
          errorsObj.password = 'Password is required';
        }
        setErrors(errorsObj);
        // If there are no errors, you can submit the form
        if (Object.keys(errorsObj).length === 0) {
          // Handle form submission here
          console.log('Form submitted:', formData);
        }
      };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.email && 'border-red-500'}`} placeholder="Email address" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.password && 'border-red-500'}`} placeholder="Password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
  
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l5.879 5.879a1 1 0 001.414-1.414L11.414 3.586a1 1 0 00-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
