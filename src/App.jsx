import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './page/Homepage'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { About } from './page/About'
import { PropertyDetailPage } from './page/PropertyDetailPage'
import { NotFound } from './page/NotFound'

function App() {


  return (
    <>
    <Navbar />
    <Sidebar />

     <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/property/:id" element={<PropertyDetailPage />} />
      <Route path="*" element={<NotFound />} />

     </Routes>

     <Footer />
    </>
  )
}

export default App
