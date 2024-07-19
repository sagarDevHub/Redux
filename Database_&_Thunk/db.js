import logger from "redux-logger";
import { createStore , applyMiddleware} from 'redux';
import axios from "axios";
import { thunk } from "redux-thunk";

const init = 'intiUser'
const inc = 'increment';
const dec = 'decrement';
const incBy = 'incrementByAmount';

const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

function reducer(state= {amount:1}, action){
    switch(action.type){
        case init : 
            return {amount: action.payload};
        case inc : 
            return {amount: state.amount+1};
        case dec:
            return {amount: state.amount-1};
        case incBy:
            return {amount: state.amount+action.payload};
        default: 
            return state;
    }
}

function increment(){
    return {type : 'increment'}
}

async function intiUser(dispatch, getState){
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    dispatch({type : 'initUser', payload: data.amount});
}

function decrement(){
    return {type : 'decrement'}
}

function incrementByAmount(value){
    return {type : 'incrementByAmount', payload: value}
}

setInterval(()=>{
    store.dispatch(intiUser)
}, 2000);

store.subscribe(()=>{
    console.log(store.getState());
})

// Async API call
async function getUser(){
    const {data} = await axios.get('http://localhost:3000/accounts/1')
    console.log(data);
}

getUser();