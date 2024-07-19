import logger from "redux-logger";
import { createStore , applyMiddleware} from 'redux';

let history = [];
const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state= {amount:1}, action){
    if(action.type === "increment"){
        return {amount: state.amount+1};
    }
    if(action.type === "decrement"){
        return {amount: state.amount-1};
    }
    if(action.type === "incrementByAmount"){
        return {amount: state.amount+action.payload};
    }
    return state;
}
setInterval(()=>{
    store.dispatch({type: 'incrementByAmount', payload: 4})
}, 2000);

store.subscribe(()=>{
    history.push(store.getState());
    console.log(history);
})