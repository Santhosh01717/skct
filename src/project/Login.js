import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError]=useState(false);
    const[pcheck,setPCheck]=useState(false);
    const[ucheck,setUCheck]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>{
        event.preventDefault();
        if(userName.length===0 || password.length===0)
        {
          setError(true)
        }
            
               if(userName==="admin" && password==="admin")
               {
                navigate('/home')
               }
               else if(password.length>0 && password!=="admin"){
                setPCheck(true)
               }
               else if(userName.length>0 && userName!=="admin")
               {
                setUCheck(true)
               }
  }     
  return (
    <>
    <div className="Login-Tot">
    <form class="form19" onSubmit={formHandler}>
    <div className="head">
    <h3>Login</h3>
    </div>
    <div className="Form">
    <span>Username : </span>
    <input class="UPinput" type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)} /><br/>
    
    <div>
    {ucheck?<label style={{color:'red',fontSize: 13}}>
    Wrong Username
    </label>: ""}


    {error && userName.length===0?
    <label style={{color:'red',fontSize: 13}}>
    Username is required
    </label>: ""}

    </div>
    <span class="pass">Password : </span>
    <input class="UPinput" type="Password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
      
      {error && password.length ===0?
      <label style={{color: 'red',fontSize: 13}}>
      Password is required
      </label> :""}


      {pcheck? <label style={{color: 'red',fontSize: 13}}>
       Wrong Password 
      </label> :""}

    </div>
    <div className='but'>
    <button class="button1" type="submit">Sign in</button>
    </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default Login;