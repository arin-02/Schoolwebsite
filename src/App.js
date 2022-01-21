import React from 'react';
import Content from './Component/Content';
import Content2 from './Component/Content2';
import Navbar from "./Component/Navbar";


function App() {
  return (
    <>
    <div className='mx-40'>
      <Navbar/>
      <Content/>
      <Content2/>
    </div>
      </>
    
  );
}

export default App;
