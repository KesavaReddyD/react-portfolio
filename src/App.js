import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
