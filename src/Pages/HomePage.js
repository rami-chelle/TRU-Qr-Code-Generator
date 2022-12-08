import React from 'react';
import {useNavigate} from 'react-router-dom';

//import {Link} from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    
    function handleClickAdmin (){
        navigate('/admin-page')
    }

    function handleClickUser (){
        navigate ('/user-page')
    }

    return (
     <>
      <div className='button-container'>
        {/* <div  className= 'btn-text'><p>WELCOME!</p></div> */}
        <button className='btn' onClick={handleClickAdmin}>ADMIN</button> <br /> 
        <button className='btn' onClick={handleClickUser}>USER</button>
      </div>
     </>
    )
  }
  
export default HomePage;