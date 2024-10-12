import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
  const pro = useSelector(store => {
    return store?.todo;
  });
  

  return (
    <>
     <div className='flex gap-4  ' >
      {pro?.map((item)=>{
        return(
         <div key={item.id} className=' w-32 h-32 border border-black '>
         hhhhh
          <div>{item.name}</div>
          <img src={item.image} key={item.id} />
          </div>
   )
})}
     
     </div>
    </>
  )
}

export default Todos