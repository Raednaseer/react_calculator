import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './NewCounter'

function NewComponent() {
    const count = useSelector((state)=>state.count)
    const countt = useSelector((state)=>state.countt)
    const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-white mb-5">Count- {count}</h1>
      <h1 className="text-white mb-5">Countt- {countt}</h1>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition mb-5 ma-5" onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition" onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default NewComponent
