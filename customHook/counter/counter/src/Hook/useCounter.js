import {useState} from "react"

const useCounter=(initialvalue)=>{
    const [count,setCount]=useState(initialvalue)

    const increment=(updatedValue)=>{

        setCount(updatedValue)

    }

    const decrement=(updatedValue)=>{

        setCount(updatedValue)

    }

    return [count,increment,decrement]
}

export default useCounter