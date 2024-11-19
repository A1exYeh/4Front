import { useState } from "react";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Submitted with: ", { username, password });
  };

  return (
    <>
      <div className="min-h-screen bg-green-400 flex flex-col justify-center items-center">
        <div className="bg-red-600 min-w-[250px] w-[24%] h-[300px] lg:py-8 text-center rounded-lg shadow-lg flex flex-col items-center justify-center">
          <div className="text-2xl md:text-3xl lg:text-3xl ">
            <h1>Sign In</h1>
          </div>
          <form id="loginForm" onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-4 py-2 px-4">
            <div className="text-base px-4 md:text-lg lg:text-xl text-left max-w-fit">
              <input
                value={username}
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="text-base px-4 md:text-lg lg:text-xl text-left max-w-fit">
              <input
                value={password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mx-auto">
              <button type="submit">Sign In</button>
            </div>
          </form>
          <p>
          Not Registered? <a href="#">Sign Up</a>
        </p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
