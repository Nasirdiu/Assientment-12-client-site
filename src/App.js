import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Login from "./Pages/Login/Login/Login";
import SingUp from "./Pages/Login/SingUp/SingUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Profile from "./Pages/Dashboard/Profile";
import ProductAdd from "./Pages/Dashboard/ProductAdd";
import ReviewAdd from "./Pages/Dashboard/AddReview";
import NotFound from "./components/NotFound";
import PurchaseProduct from "./Pages/Tools/PurchaseProduct";
import Admin from "./Pages/Dashboard/Admin";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <PurchaseProduct></PurchaseProduct>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="addReview" element={<ReviewAdd></ReviewAdd>}></Route>
          <Route path="addProduct" element={<ProductAdd></ProductAdd>}></Route>
          <Route
            path="admin"
            element={
              <RequireAdmin>
                <Admin></Admin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
