import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Project from "./components/project";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
