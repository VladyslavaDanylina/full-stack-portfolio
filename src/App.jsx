import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'
import Contacts from './pages/Contacts'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
      }
    };
  
    // Если DOM уже загружен
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }
  
    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);
  return (
    <div
    className="bg-wrapper text-white"
    style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      position: "relative",
    }}
  >
    <div id="preloader">
  <div className="loading-text">
    Loading
    <span className="dots">
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </span>
  </div>
</div>
    {/* Прозрачный оверлей */}
    <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{
      backgroundColor: 'rgba(11, 11, 46, 0.7)', // тёмный полупрозрачный фильтр
      zIndex: 1,
    }}></div>

    {/* Контент поверх оверлея */}
    <div className="content position-relative" style={{ zIndex: 2 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
    
  </div>
  
  )
}

export default App