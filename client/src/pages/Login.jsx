// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({});
//   const [addUser, { error }] = useMutation(ADD_USER);

//   let navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await addUser({
//         variables: { ...formData },
//       });
//       navigate("/");
//       console.log(data);
//     } catch (err) {
//       alert(`${isLogin ? "Login" : "Signup"} failed. Please try again.`);
//       console.err(err);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>{isLogin ? "Login" : "Signup"}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="form-group">
//             <label>Username:</label>
//             <input
//               name="username"
//               type="text"
//               onChange={handleInputChange}
//               required={!isLogin} // Make required only for signup
//             />
//           </div>
//         )}
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             name="email"
//             type="email"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             name="password"
//             type="password"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">{isLogin ? "Login" : "Signup"}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : "Already have an account?"}
//         <button type="button" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Sign Up" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";
import "../App.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(""); // New state for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isLogin ? "/api/login" : "/api/signup",
        {
          email,
          password,
          ...(isLogin ? {} : { username }), // Add username only if signing up
        }
      );
      console.log(response.data);
    } catch (err) {
      setError(`${isLogin ? "Login" : "Signup"} failed. Please try again.`);
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={!isLogin} // Make required only for signup
            />
          </div>
        )}
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
