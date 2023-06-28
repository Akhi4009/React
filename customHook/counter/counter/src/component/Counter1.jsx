
import useCounter from "../Hook/useCounter"

const Counter1 = () => {

    const [count,increment,decrement]=useCounter(0)

    
    
  return (
    <>
    <h1>
    Counter:{count}
    </h1>
    <button onClick={()=>increment(count+10)}> + 10 </button>
    <button onClick={()=>decrement(count-10)}> -10 </button>
    </>
  )
}

export default Counter1