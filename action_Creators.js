import logger from "redux-logger";
import { createStore , applyMiddleware} from 'redux';

let history = [];

// Action name constants. These must be declared at the top of the reducer function.
const inc = 'increment';
const dec = 'decrement';
const incBy = 'incrementByAmount';

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state= {amount:1}, action){
    if(action.type === inc){
        return {amount: state.amount+1};
    }
    if(action.type === dec){
        return {amount: state.amount-1};
    }
    if(action.type === incBy){
        return {amount: state.amount+action.payload};
    }
    return state;
}

// Action creators
function increment(){
    return {type : 'increment'}
}

function decrement(){
    return {type : 'decrement'}
}

function incrementByAmount(value){
    return {type : 'incrementByAmount', payload: value}
}

setInterval(()=>{
    // using the action creators.
    store.dispatch(incrementByAmount(5))
}, 2000);

store.subscribe(()=>{
    history.push(store.getState());
    console.log(history);
})