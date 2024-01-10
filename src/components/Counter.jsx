import { useSelector, useDispatch } from 'react-redux';
import { 
  increment,
  decrement,
  reset,
  increaseByNumber
} from './../features/counterSlice/counterSlice.js';
function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count is {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increase
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button onClick={() => dispatch(increaseByNumber(5))}>
          Increase by Five
        </button>
      </div>
    </div>
  )
}

export default Counter
