import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Home from './features/home/index';
import ButtonSrollTop from './components/button-scroll-top.jsx';

function App() {
  return (
    <Box>
      <ButtonSrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}


export default App;
