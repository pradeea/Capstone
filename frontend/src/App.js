import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AppointMent from './pages/AppointMent';
import Surgeons from './pages/Surgeons';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='login' element={<Login/>} />
  <Route path='register' element={<Register/>} />
  <Route path='appointment' element={<AppointMent/>}/>
  <Route path='surgeons' element={<Surgeons/>}/>
  <Route path='services' element={<Services/>}/>
  <Route path='aboutus' element={<AboutUs/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
