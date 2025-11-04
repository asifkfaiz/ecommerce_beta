import { Link, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
