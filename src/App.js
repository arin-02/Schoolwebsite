import React from 'react';
import Content from './Component/Content';
import Navbar from "./Component/Navbar";
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <div className='mx-40'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
      </>
    
  );
}

export default App;
