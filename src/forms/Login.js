import React, { useState } from 'react'


function Login() {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError]=useState(false);
    const[pcheck,setPCheck]=useState(false);
    const[ucheck,setUCheck]=useState(false);
    const formHandler=(event)=>{
        event.preventDefault();
        if(userName.length===0 || password.length===0)
        {
          setError(true)
        }
            const loginObj={
                name: userName,
                pass: password 
               }
               if(userName==="admin" && password==="admin")
               {
                {alert(JSON.stringify(loginObj));}
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
    <div>
    <h3>Login</h3></div>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)} /><br/>
    
    <div>
    {ucheck?<label style={{color:'red',fontSize: 13}}>
    Wrong Username
    </label>: ""}


    {error && userName.length===0?
    <label style={{color:'red',fontSize: 13}}>
    Username is required
    </label>: ""}

    </div>
    Password : <input type="Password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
      
      {error && password.length ===0?
      <label style={{color: 'red',fontSize: 13}}>
      Password is required
      </label> :""}


      {pcheck? <label style={{color: 'red',fontSize: 13}}>
       Wrong Password 
      </label> :""}

    </div>
    <button type="submit">Sign in</button>
    </form>
    </>
  )
}

export default Login;






























