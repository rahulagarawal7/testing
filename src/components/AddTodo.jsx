import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct ,removeProduct} from '../features/todo/todoSlice'

function AddTodo() {
  const despatch=useDispatch()
  
  const pro= useSelector(store=>store?.todo?.products)
    console.log(pro)


 async function addToRedux(){

  const data = await fetch('https://fakestoreapi.com/products')
  const json= await data.json()


  if(json)
      despatch(addProduct(json))
  }
  

  return (
    <div className="space-x-3 mt-12" >
     
      <button
       onClick={(e)=>addToRedux(e)}
      
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Product
      </button>
      <button
        onClick={()=>despatch(removeProduct())}
      
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        remove Product
      </button>

    </div>
  )
}

export default AddTodo