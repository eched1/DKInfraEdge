import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './src/layouts/MainLayout';
import Home from './src/components/pages/Home';
import Services from './src/components/pages/Services';
import Contact from './src/components/pages/Contact';

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
