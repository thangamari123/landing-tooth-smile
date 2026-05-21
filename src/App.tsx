import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TreatmentPage from './pages/TreatmentPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ThankYouPage from './pages/ThankYouPage';
import FloatingCTA from './components/FloatingCTA';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments/:slug" element={<TreatmentPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Route>
      </Routes>
      <FloatingCTA />
    </>
  );
}

export default App;
