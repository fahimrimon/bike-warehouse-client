import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./Header/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/Auth/RequireAuth";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddItems from "./components/AddItems/AddItems";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='/product/:productId' element={<RequireAuth>
         <ProductDetails></ProductDetails>
       </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
         <AddItems></AddItems>
       </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
         <ManageProduct></ManageProduct>
       </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
