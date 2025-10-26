import React, { useState } from 'react';

function AdvancedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value    
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dữ liệu form đã gửi:', formData);
    alert(`Username: ${formData.username}, Email: ${formData.email}`);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:{}
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <br />
      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default AdvancedForm;