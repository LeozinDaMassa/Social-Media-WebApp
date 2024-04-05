import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

const API_URL = 'http://localhost:5000/api/auth';

axios.post(`${API_URL}/register`, userData)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

export default App;
