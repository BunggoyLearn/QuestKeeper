// // import React, { useEffect, useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom"; // Import routing components
// // import CarComponent from "./components/CarComponent";
// // import Header from "./components/Header";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Create from "./pages/Create";
// // import Campaign from "./pages/Campaign";
// // import CarProvider from "./utils/CarContext";
// // import "./App.css";

// // export default function App() {
// //   useEffect(() => {
// //     document.title = "QuestKeeper";
// //   }, []);

// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   return (
// //     <CarProvider>
// //       <Router>
// //         <Header />

// //         <main>
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
// //               }
// //             />

// //             <Route
// //               path="/login"
// //               element={<Login setIsLoggedIn={setIsLoggedIn} />}
// //             />

// //             <Route
// //               path="/home"
// //               element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
// //             />

// //             <Route
// //               path="/create"
// //               element={isLoggedIn ? <Create /> : <Navigate to="/login" />}
// //             />

// //             <Route
// //               path="/campaign"
// //               element={isLoggedIn ? <Campaign /> : <Navigate to="/login" />}
// //             />

// //             <Route path="*" element={<Navigate to="/login" />} />
// //           </Routes>
// //         </main>
// //       </Router>
// //     </CarProvider>
// //   );
// // }
// // ===========first revise==================
//import React, { useEffect, useState } from "react";

// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom"; // Import routing components
// import CarComponent from "./components/CarComponent";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Create from "./pages/Create";
// import Campaign from "./pages/Campaign";
// import CarProvider from "./utils/CarContext";
// import "./App.css";

// export default function App() {
//   useEffect(() => {
//     document.title = "QuestKeeper";
//   }, []);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <CarProvider>
//       <Router>
//         <Header />

//         <main>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
//               }
//             />

//             <Route
//               path="/login"
//               element={<Login setIsLoggedIn={setIsLoggedIn} />}
//             />

//             <Route
//               path="/home"
//               element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
//             />

//             <Route
//               path="/create"
//               element={isLoggedIn ? <Create /> : <Navigate to="/login" />}
//             />

//             <Route
//               path="/campaign"
//               element={isLoggedIn ? <Campaign /> : <Navigate to="/login" />}
//             />

//             <Route path="*" element={<Navigate to="/login" />} />
//           </Routes>
//         </main>
//       </Router>
//     </CarProvider>
//   );
// }

import { useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Campaign from "./pages/Campaign";
import NewEnvironment from "./pages/NewEnvironment";
import "./App.css";

export default function App() {
  useEffect(() => {
    document.title = "QuestKeeper";
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/create"
            element={isLoggedIn ? <Create /> : <Navigate to="/login" />}
          />

          <Route
            path="/campaign"
            element={isLoggedIn ? <Campaign /> : <Navigate to="/login" />}
          />
          <Route path="/new-environment" element={<NewEnvironment />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  );
}
