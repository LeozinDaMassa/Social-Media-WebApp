import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css'; // Import the CSS file for Register component


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data); // Handle successful registration
    } catch (err) {
      console.error(err.response.data); // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
