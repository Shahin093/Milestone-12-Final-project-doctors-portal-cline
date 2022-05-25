import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Review from './Pages/Dashboard/Review';
import User from './Pages/Dashboard/User';
import RequiredAdmin from './Pages/Login/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';
// import Review from './Pages/Home/Review';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/appointment' element={
          <RequiredAuth>
            <Appointment></Appointment>
          </RequiredAuth>
        }>
        </Route>
        <Route
          path='dashboard'
          element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
          }>

          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>

          <Route path='users' element=
            {
              <RequiredAdmin>
                <User></User>
              </RequiredAdmin>
            }
          ></Route>
          <Route path='addDoctor' element=
            {
              <RequiredAdmin>
                <AddDoctor></AddDoctor>
              </RequiredAdmin>
            }
          ></Route>
          <Route path='manageDoctor' element=
            {
              <RequiredAdmin>
                <ManageDoctor></ManageDoctor>
              </RequiredAdmin>
            }
          ></Route>
        </Route>
        {/* <Route path='*' ></Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
