import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Layout from './components/layout';
import About from './pages/about';
import Contact from './pages/contact';
import ProjectDetail from './pages/projectDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
