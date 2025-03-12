import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { PropertiesList } from "../components/PropertiesList"

export const Homepage = () => {
  return (
    <>
     <Navbar />
      <Sidebar />
      <PropertiesList />
     <Footer />

    </>
  )
}

