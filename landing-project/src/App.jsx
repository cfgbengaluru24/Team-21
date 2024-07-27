import HomePage from './pages/home/HomePage';


import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ContactPage from './pages/Contactuspage/ContactPage';
import ProductList from './pages/shoppage/ProductList';
import Requestpage from './pages/requestpage/Requestpage';
import Aboutuspage from './pages/aboutuspage/Aboutuspage';
import Volunteerpage from './pages/volunteerpage/Volunteerpage';
const App = () => {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/ProductCard" element={<ProductList/>} />
          <Route path="/Request" element={<Requestpage/>} />
          <Route path="/Aboutus" element={<Aboutuspage/>} />
          <Route path="/Volunteer" element={<Volunteerpage/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}


export default App
