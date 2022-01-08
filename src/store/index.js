//creating new store

//importing createstore function
import { createStore} from 'redux'; 

//counterReduce r gets "existing state as first argument", and action that was dispatched as the second argument
//default value is given to state
const counterReducer = (state = {counter:0}, action) =>{
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
  // if  neither action is done return the unchanged state
  return state;
}

//calling createStore and storing it in a constant store
//this now creates our redux store
const store = createStore(counterReducer);
export default store;
