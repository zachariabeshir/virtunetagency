import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Admin from "./Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Shared layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
