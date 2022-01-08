//creating new store

//importing createstore function
import { createStore} from 'redux'; 

//counterReduce r gets "existing state as first argument", and action that was dispatched as the second argument
//default value is given to state

const inititalState = {counter:0, showCounter: true}
const counterReducer = (state = inititalState, action) =>{
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if(action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter

    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter

    }
  }

  if(action.type === 'toggle'){
    return{
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }
  // if  neither action is done return the unchanged state
  return state;
}

//calling createStore and storing it in a constant store
//this now creates our redux store
const store = createStore(counterReducer);
export default store;
