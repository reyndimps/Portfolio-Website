import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Certificates />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
