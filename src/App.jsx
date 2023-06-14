import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navBar/NavBar"
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from './pages/ContactUs'
function App() {
  return (
    <div className="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
      <div id="wrapper" className="animsition">
        <div id="page" className="clearfix">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services" element={<ContactUs />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
