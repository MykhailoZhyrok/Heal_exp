
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from './pages/Main/Main';
import { Layout } from './Layout/Layout';
import { LinksList } from './pages/LinksList/LinksList';
import { ContactPage } from './pages/ContactPage/ContactPage';
import ExpPage from './pages/ExpPafe/ExpPage';
import AddExperience from './pages/AddExperience/AddExperience';

function App() {


  return (
    <>
    <BrowserRouter>

    <Layout>


    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/our-links" element={<LinksList/>} />
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
