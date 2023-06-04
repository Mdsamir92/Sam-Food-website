import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import PlaceOrder from './components/PlaceOrder';

function App() {
  return (
  <>
   <Header />

   <Routes>
     <Route path='/menu' element={<Cards />} />
     <Route path='/' element={<Home />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/contact' element={<ContactUs />} />
     <Route path='/placeOrder' element={<PlaceOrder />} />
   </Routes>
   <Footer/>
  </>
  );
}

export default App;