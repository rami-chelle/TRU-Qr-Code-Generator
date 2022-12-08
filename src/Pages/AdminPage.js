import './AdminPage.css';

import {  useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const adminCredentials = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === 'admin123')
      {
        navigate ('/admin-landing-page');
      }else if (username === '' || password === '')
        {
          alert ('Enter valid input!');
        }else {
        alert('Invalid username or password! Try Again');
        setPassword('');
        setUsername('');
        }
      }

    return (
      <div className = 'Admin-Login-container'>
        <form className = 'Admin-form-container'>
        <label>Username:</label> 
        <input className = 'Admin-input-container'
          type = 'text'
          value = {username}
          placeholder = 'Input valid username here...' 
          onChange = {(e) => setUsername(e.target.value)}
          required
        />
        
        <br />

        <label>Password:</label>
        <input className = 'Admin-input-container'
          type = 'password'
          value = {password}
          placeholder = 'Input valid password here...' 
          onChange = {(e) => setPassword(e.target.value)}
          required        
        />

        <br />

        <div className = 'Button-container'>
          <button className = 'Login-button'
            onClick = {adminCredentials}
          >LOGIN</button>
        </div>

        <div className = 'Button-container'>
          <button className = 'Back-button'
            onClick = {() => navigate(-1)}
          >BACK</button>
        </div>
      </form>
      </div>
      
         
    )

};
  
export default AdminPage;

