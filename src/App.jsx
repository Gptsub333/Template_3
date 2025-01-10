import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Benefits from "./components/Benefits";
import KeyFeatures from "./components/KeyFeatures";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div>
          <Hero />
          <Dashboard />
          <Benefits />
          <KeyFeatures />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
