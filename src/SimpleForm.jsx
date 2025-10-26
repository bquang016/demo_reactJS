import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Tên bạn vừa nhập là: ' + name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tên của bạn:{}
        <input 
          type="text" 
          value={name} 
          onChange={handleChange} 
        />
      </label>
      <button type="submit">Gửi</button>
    </form>
  );
}

export default SimpleForm;