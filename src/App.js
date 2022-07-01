import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Price from './Pages/Price';
import Contact from './Pages/Contact'
import Testimonial from './Pages/Testimonial';
import { BrowserRouter, Route,Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header/>}>
        <Route path="/" element={<Footer/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Price" element={<Price />}/>
        <Route path="/Testimonial" element={<Testimonial />}/>
        </Route>
        </Route>
        
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
