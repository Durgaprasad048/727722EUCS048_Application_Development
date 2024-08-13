import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MechanicalDepartment from './components/Courses/MechanicalDepartment';
import ElectricalDepartment from './components/Courses/ElectricalDepartment';
import ComputerDepartment from './components/Courses/ComputerDepartment';
import CivilDepartment from './components/Courses/CivilDepartment';
import Academics from "./components/Academics";
import Fees from './components/Admission/Fees';
import Rules from './components/Admission/Rules';
import AdmissionForm from "./components/Admission/AdmissionForm";
import PaymentPage from "./components/Admission/Payment";
import Facilities from './components/Facilities';
import About from "./About"
import PlacementPage from "./Placement";
import Contact from './components/Contact';
import Footer from './components/Footer';
import StudentReports from "./components/StudentReports";
import AboutFoodCourt from "./components/Foodcourt";
import Gym from "./components/Gym";
import Lab from "./components/Lab";
import Library from "./components/Library";
import IndoorStadium from "./components/IndoorStadium";
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./Admin/AdminLogin";
import SignUpad from "./Admin/SignUpad";
import Homead from "./Admin/Homead";
import ResponseManagement from "./Admin/InquiriesManagement";
import InquiryAssignment from "./Admin/InquiryAssignment";
import PrioritySetting from "./Admin/PrioritySetting";
import AdminDashboard from "./Admin/AdminDashboard";
import StatusTracking from "./StausTracking";
import Addstudent from "./Admin/AddStudents";


function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  
  return (
    <>
    {
      loading ?
        <Loader />
      :
      <Router>
         <ScrollToTop smooth />
        
        <Routes>
          
          <Route path='/Home' element={<Home/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/' element={<SignUp />} />
          <Route path='/nav' element={<Navbar/>}/>
          <Route path='/mechanicaldepartment' element={<MechanicalDepartment />} />
          <Route path='/electricaldepartment' element={<ElectricalDepartment/>} />
          <Route path='/computerdepartment' element={<ComputerDepartment/>} />
          <Route path='/Civildepartment' element={<CivilDepartment />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/admissionform' element={<AdmissionForm/>} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/Home/academics' element={<Academics/>} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/facilities' element={<Facilities/>} />
          <Route path='/about' element={<About/>} />   
          <Route path='/Foodcourt' element={<AboutFoodCourt/>}/>
          <Route path='/Gym' element={<Gym/>}/>
          <Route path='/Library' element={<Library/>}/>
          <Route path='/Studentreport' element={<StudentReports/>}/>
          <Route path='/Indoorstadium' element={<IndoorStadium/>}/>
          <Route path='/placement' element={<PlacementPage/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/Lab' element={<Lab/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/admin-signup' element={<SignUpad/>}/>
          <Route path='/Homead' element={<Homead/>}/>
          <Route path='/adminresponse' element={<ResponseManagement/>}/>
          <Route path='/adminassignment' element={<InquiryAssignment/>}/>
          <Route path='/adminsetting' element={<PrioritySetting/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='/StatusTracking' element={<StatusTracking/>}/>
          <Route path='/addstudent' element={<Addstudent/>}/>
        </Routes>
        
      </Router>
    }
    </>
  );
}

export default App;
