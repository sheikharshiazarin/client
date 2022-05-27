import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import Generator from "./components/Generator/Generator";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import OrderList from "./components/OrderList/OrderList";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/generator"
          element={
            <RequireAuth>
              <Generator />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <OrderList />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
