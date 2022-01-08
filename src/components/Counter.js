import { useSelector } from 'react-redux';
//useSelector allows us to then automatically select a part of our state managed by the store

import classes from './Counter.module.css';

const Counter = () => {
 const counter =  useSelector(state => state.counter ); //a function which determines which piece of data we want to extract from our store

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
