import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// TODO: Create the related files in a 'pages' folder

// import App from './App.jsx';
// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

// TODO: Include all the routes

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     error: <NoMatch />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/success",
//         element: <Success />,
//       },
//       {
//         path: "/orderHistory",
//         element: <OrderHistory />,
//       },
//       {
//         path: "/products/:id",
//         element: <Detail />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// Include: <RouterProvider router={router} /> instead of <App />
