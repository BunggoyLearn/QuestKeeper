// //First page the user encounters if they are not logged in; here the user can either sign up or login

// // import { useState } from "react";
// // import axios from "axios";

// // const Login = () => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(e, { email, password });
// //       console.log(response.data); // Handle response
// //     } catch (err) {
// //       setError(`${isLogin ? "Login" : "Signup"} failed. Please try again.`);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>{isLogin ? "Login" : "Signup"}</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         {error && <p>{error}</p>}
// //         <button type="submit">{isLogin ? "Login" : "Signup"}</button>
// //       </form>
// //       <p>
// //         {isLogin ? "Don't have an account?" : "Already have an account?"}
// //         <button type="button" onClick={() => setIsLogin(!isLogin)}>
// //           {isLogin ? "Sign Up" : "Login"}
// //         </button>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;

// =======================================================================
import { useState } from "react";
import axios from "axios";
import "../App.css"; // Import the CSS file

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data); // Handle response
    } catch (err) {
      setError(`${isLogin ? "Login" : "Signup"} failed. Please try again.`);
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Login;
