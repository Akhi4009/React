import React,{useState} from 'react'
import useCounter from '../Hook/useCounter'
const Counter3 = () => {

    const [count,increment,decrement]=useCounter(0)
  return (
    <>
    <h1>
    Counter:{count}
    </h1>
    <button onClick={()=>increment(count+100)}> + 100 </button>
    <button onClick={()=>decrement(count-100)}> -100 </button>
    </>
  )
}

export default Counter3