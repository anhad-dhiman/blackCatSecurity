import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './Hero'
import Service from './Service'
import Choose from './Choose'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Foot from './components/Foot'
import Abt from './Abt'
import StructuredWiring from './pages/StructuredWiring'
import SecuritySystems from './pages/SecuritySystems'
import HomeAutomation from './pages/HomeAutomation'
import IntercomSystems from './pages/IntercomSystems'
import AudioVideo from './pages/AudioVideo'
import Networking from './pages/Networking'
import CentralVacuum from './pages/CentralVacuum'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="h-16"></div>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Service />
            <Choose />
            <Abt />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/structuredwiring" element={<StructuredWiring />} />
        <Route path="/services/securitysystems" element={<SecuritySystems />} />
        <Route path="/services/homeautomation" element={<HomeAutomation />} />
        <Route path="/services/intercomsystems" element={<IntercomSystems />} />
        <Route path="/services/audiovideo" element={<AudioVideo />} />
        <Route path="/services/networking" element={<Networking />} />
        <Route path="/services/centralvacuum" element={<CentralVacuum />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  )
}

export default App
