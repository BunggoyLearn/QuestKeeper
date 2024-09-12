import { useEffect } from "react";
import CarComponent from "./components/CarComponent";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Campaign from "./pages/Campaign";
// Importing our theme provider which will make our global state available to child components
import CarProvider from "./utils/CarContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  useEffect(() => {
    document.title = "Digital Garage";
  }, []);

  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}
