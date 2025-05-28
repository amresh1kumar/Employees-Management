import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Homepage from "./components/Homepage";
import Employee from "./page/Employee";
import Contact from "./page/Contact";
import Qualification from "./page/Qulification";
import FamilyDetails from "./page/FamilyDetalis";
import OfficeDetails from "./page/office/Office";
import MyProfile from "./page/User Profile/MyProfile";
import EditProfile from "./page/User Profile/EditProfile";
import ChangePassword from "./page/User Profile/ChangePassword";
import Nomination from "./page/Nomination ";
import Intial from "./page/Intial"

//Admin Login
import LandingPage from "./page/Admin/LandingPage";
import Register from "./page/Admin/Register";
import ForgotPassword from "./page/Admin/ForgotPassword";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./page/AdminPage/Dashboard";

//Employee Login
import EmpLogin from "./page/Emp/EmpLogin";
import EmpSignUp from "./page/Emp/SignUp";
import EmpForgotPassword from "./page/Emp/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* For Admin login */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdminSignUpPage" element={<Register />} />
        <Route path="/AdminForgetpassword" element={<ForgotPassword />} />
        <Route path="/EmpLogin" element={<EmpLogin />} />
        <Route path="/AdminLayout" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* For Employee login */}
        <Route path="/EmpSignUpPage" element={<EmpSignUp />} />
        <Route path="/EmpForgetpassword" element={<EmpForgotPassword />} />

        {/* Main page */}
        <Route path="/Layout" element={<Layout />}>
          <Route index element={<Employee />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Family" element={<FamilyDetails />} />
          <Route path="Office" element={<OfficeDetails />} />
          <Route path="Qualification" element={<Qualification />} />
          <Route path="Nomination" element={<Nomination />} />
          <Route path="Intial" element={<Intial />} />
          <Route path="UserProfile" element={<MyProfile />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
