import React,{useState} from 'react'
import useCounter from '../Hook/useCounter'

const Counter2 = () => {

const [count,increment,decrement]=useCounter(0)
  return (
    <>
    <h1>
    Counter:{count}
    </h1>
    <button onClick={()=>increment(count+5)}> + 5 </button>
    <button onClick={()=>decrement(count-5)}> -5 </button>
    </>
  )
}

export default Counter2