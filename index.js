import { createStore } from 'redux';

let history = [];

// state
const store = createStore(reducer);

// reducer
function reducer(state= {amount:1}, action){
    if(action.type === "increment"){
        // immutable
        return {amount: state.amount+1};
    }
    return state;
}

// dispatch() is used to send action to the reducer.
setInterval(()=>{
    store.dispatch({type: 'increment'})
}, 2000);

// console.log(store.getState());
store.subscribe(()=>{
    history.push(store.getState());
    console.log(history);
})