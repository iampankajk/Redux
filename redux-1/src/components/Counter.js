import classes from './Counter.module.css';

import { counterActions } from '../store/index';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter =  useSelector(state => state.counter);
  const showCounter = useSelector(state=>state.showCounter);
  const dispatch =  useDispatch();
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggle());
  };

  const increamentHandler = ()=>{
    dispatch(counterActions.increament());
  };
  const decreamentHandler = ()=>{
    dispatch(counterActions.decreament());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
