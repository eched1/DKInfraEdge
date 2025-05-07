import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
