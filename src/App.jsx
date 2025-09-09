import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import MandiSection from "./components/MandiSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MenuSection />
      <MandiSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;