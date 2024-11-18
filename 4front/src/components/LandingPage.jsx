import { useState } from 'react'

function LandingPage () {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const handleLogin = (e) => {
      e.preventDefault();
      console.log("Form Submitted with: ", {username, password});
   } 

   return (
      <>
      <div>
         <h1>Sign In</h1>
      </div>
      <div>
         <form id="loginForm" onSubmit={handleLogin}>
            <div>
               <label htmlFor="username">Username</label>
               <input value={username} name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
               <button type="submit">Sign In</button>
            </div>
         </form>
      </div>

      <p>
         Not Registered?{' '}
         <a href="#">Sign Up</a>
      </p>
      </>
   )
}

export default LandingPage