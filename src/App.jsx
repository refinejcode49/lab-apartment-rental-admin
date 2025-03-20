import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./page/HomePage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { About } from "./page/About";
import { PropertyDetailPage } from "./page/PropertyDetailPage";
import { NotFound } from "./page/NotFound";
import CreateProperty from "./page/CreateProperty"; 
import UpdateProperty from "./page/UpdateProperty"; 
import listings from "./assets/listings.json";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [data, setData] = useState(listings.results);
  // console.log("App => ",data);
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage data={data} setData={setData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetailPage data={data} setData={setData}/>} />
        <Route path="/add-property" element={<CreateProperty data={data} setData={setData}/>} />
        <Route path="/edit-property/:id" element={<UpdateProperty data={data} setData={setData}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
