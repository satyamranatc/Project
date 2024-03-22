import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Service from './components/Service.jsx'
export default function App() {
  let [Search,setSearch] = useState("")
  return (
    <div>


    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home setSearch={setSearch}/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/service" element={<Service/>}/>
        {/* <Route path="/contact" element={<Contact setSearch={setSearch}/>}/> */}
      </Routes>
    
    
    </BrowserRouter>


    </div>
  )
}
