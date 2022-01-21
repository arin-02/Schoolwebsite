import React from 'react';

function Content2() {
  return( 
  <div className='all grid grid-cols-2'>
        <div className="lefty block ">
        <div className="text-7xl mt-8">
        THE SMARTER WAY TO LEARN 
        <span style={{color:"#F37335"}}> ANYTHING</span>
        </div>
        <div className="texts text-lg mt-8 border-l-4" style={{borderColor:"#F37335"}}>
            <p className='mx-6'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore harum numquam sed cum sapiente consequatur provident? Dolor veritatis doloribus aperiam!
            </p>
        </div>
        <div className="searchbar">

        </div>
        </div>
        {/*  */}
        <div className="righty grid grid rows-3">

        <div className="img1 grid content-center place-content-center">
            <img className=' rounded-full border-2 w-60 ' src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-1.jpg" alt="" />
        </div>

        </div>
        {/*  */}
  </div>
  )
}

export default Content2;
