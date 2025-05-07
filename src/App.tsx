
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from './pages/Main/Main';
import { Layout } from './Layout/Layout';
import { LinksList } from './pages/LinksList/LinksList';
import { ContactPage } from './pages/ContactPage/ContactPage';
import ExpPage from './pages/ExpPafe/ExpPage';
import AddExperience from './pages/AddExperience/AddExperience';
import DocumentsSection from './pages/DocumentsSection/DocumentsSection';

function App() {

  console.log(process.env.REACT_APP_EMAIL_ID)
  return (
    <>
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
