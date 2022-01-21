import React from 'react';
import Content from './Component/Content';
import Content2 from './Component/Content2';
import Navbar from "./Component/Navbar";
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <div className='mx-40'>
      <Navbar/>
      <Content/>
      <Content2/>
      <Footer/>
    </div>
      </>
    
  );
}

export default App;
