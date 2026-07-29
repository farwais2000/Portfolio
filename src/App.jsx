import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AnimatedBackground from "./AnimatedBackground";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;