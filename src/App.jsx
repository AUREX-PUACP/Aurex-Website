import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Community from "./pages/Community";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/community-support" element={<Community />} />
      </Route>
    </Routes>
  );
}
