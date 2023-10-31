// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Navbar />
        <Element name='home'>
          <Home />
        </Element>
        <Element name='about'>
          <About />
        </Element>
        <Education />
        <Skills />
        <Element name='contact'>
          <Contact />
        </Element>
        <Footer />
      </div>
      {/* <Routes>
        <Route path='/home' element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
