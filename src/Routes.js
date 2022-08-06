import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from "./container/app/home"
import About from "./container/app/about"
import Contact from "./container/app/contact"
import Courses from "./container/app/courses"
import Programs from "./container/app/programs"
import PageNotFound from "./container/app/error"

//shared
import Footer from './components/Footer';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default MyRoutes;
