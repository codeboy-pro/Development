import React from 'react'

const Header = () => {
  return ( 
    <div className='items-center '>
<h1 className='text-5xl pb-20'>Employee Panel</h1>
    
    <div className='flex  items-center justify-between p-10  '>

      <h1 className='text-2xl font-medium '  >
        Hello <br /><span className='text-3xl font-semibold'>Pradip 👋</span>
      </h1>
      <button className='bg-red-500 text-white px-6 py-3 text-lg font-medium  h-10  flex justify-center items-center rounded  cursor-pointer '>Log out</button>






    </div>






</div>

  )
}

export default Header