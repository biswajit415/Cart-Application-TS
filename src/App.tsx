import React from 'react';

import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { Home } from './screens/Home';
import { Store } from './screens/Store';
import { About } from './screens/About';
import { Navigation } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {
  return (
    <ShoppingCartProvider>
    <Navigation/>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
