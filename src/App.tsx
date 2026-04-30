import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TreatmentPage from './pages/TreatmentPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FloatingCTA from './components/FloatingCTA';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treatments/:slug" element={<TreatmentPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Route>
      </Routes>
      <FloatingCTA />
    </>
  );
}

export default App;
