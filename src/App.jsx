import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Services from "./Components/services/Services";
import Qualification from "./Components/qualification/Qualification";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/contacts/Contact";
import Footer from "./Components/footer/Footer";
import Scrollup from "./Components/scrollup/Scrollup";
import Portfolio from "./Components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        {/* <Testimonial/> */}

        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
