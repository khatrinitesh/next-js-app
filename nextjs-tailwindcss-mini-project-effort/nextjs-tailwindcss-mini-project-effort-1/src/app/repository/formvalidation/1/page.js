"use client"
import {useState} from 'react';

const CustomApp = () => {
     // data - email and password
     const [formData, setFormData] = useState({
        email: '',
        password: '',
        selectedOptions: [],
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        isChecked: '',
        selectOptions: '', // new error state for select options
    });
    // checked and unchecked - boolean with true/false
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // clear existing errors when the user starts typing 
        setErrors({
            ...errors,
            [name]: '',
        });
    }

    // simple email validation regex
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if (isChecked) {
            setErrors({
                ...errors,
                isChecked: 'Checkbox is unchecked',
            });

            setFormData({
                ...formData,
                email: '',
                password: '',
                selectedOptions: [],
            });
        } else {
            setErrors({
                ...errors,
                isChecked: '',
            });
        }
    }

    const handleSelectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);

        // Validate if at least one option is selected
        if (selectedOptions.length === 0) {
            setErrors({
                ...errors,
                selectOptions: 'Please select at least one option',
            });
        } else {
            setErrors({
                ...errors,
                selectOptions: '',
            });
        }

        setFormData({
            ...formData,
            selectedOptions,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate email 
        if (!validateEmail(formData.email)) {
            setErrors({
                ...errors,
                email: 'Please enter a valid email address',
            });
            return;
        }

        // validate password (you can add more complex pwd validation logic)
        if (formData.password.length < 6) {
            setErrors({
                ...errors,
                password: 'Password must be at least 6 characters long',
            });
            return;
        }

        // Validate if at least one option is selected
        if (formData.selectedOptions.length === 0) {
            setErrors({
                ...errors,
                selectOptions: 'Please select at least one option',
            });
            return;
        }

        // If validation passes, you can proceed with form submission or other actions
        console.log('Form Submitted Successfully', formData, isChecked);
    }


  return (
    <div>
          <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" value={formData.email} name="email" onChange={handleInputChange} />
                    <p className="text-[red]">{errors.email}</p>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={formData.password} name="password" onChange={handleInputChange} maxLength={6} />
                    <p className="text-[red]">{errors.password}</p>
                </div>
                <div>
                    <label>Select Multiple Options</label>
                    <select value={formData.selectedOptions} onChange={handleSelectChange}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <p className="text-[red]">{errors.selectOptions}</p>
                </div>
                <div>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    Check me!
                    <p className="text-[red]">{errors.isChecked}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default CustomApp
