import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Men from './pages/Men';
import Women from './pages/Women';
import Kid from './pages/Kid';
import About from './pages/About';
import Contact from './pages/Contact';
import ViewProduct from './pages/ViewProduct';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {

  return (
   <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/men" element={<Men />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/kid" element={<Kid />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path='/viewproduct' element={<ViewProduct />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
   </>
  )
}

export default App
