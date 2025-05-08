
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";

import { Main } from './pages/Main/Main';
import { Layout } from './Layout/Layout';
import { LinksList } from './pages/LinksList/LinksList';
import { ContactPage } from './pages/ContactPage/ContactPage';
import ExpPage from './pages/ExpPafe/ExpPage';
import AddExperience from './pages/AddExperience/AddExperience';
import DocumentsSection from './pages/DocumentsSection/DocumentsSection';


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}
function App() {


  return (
    <>
    <ScrollToTop />
    <BrowserRouter>

    <Layout>


    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/our-links" element={<LinksList/>} />
      <Route path="/our-blanks" element={<DocumentsSection/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/experience" element={<ExpPage/>} />
      <Route path="/add-your-exp" element={<AddExperience/>} />
    </Routes>
    </Layout>
  </BrowserRouter>
    </>
  )
}

export default App
