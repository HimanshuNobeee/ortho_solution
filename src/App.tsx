import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import DoctorProfiles from './components/home/DoctorProfiles';
import Specialties from './components/home/Specialties';
import OverviewAwards from './components/home/OverviewAwards';
import BlogPreview from './components/home/BlogPreview';
import { Box } from '@mui/material';

// Home Component to group sections
const Home = () => {
  return (
    <Box component="main">
      <HeroSection />
      <DoctorProfiles />
      <Specialties />
      <OverviewAwards />
      <BlogPreview />
    </Box>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
