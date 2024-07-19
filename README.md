# Redux

1. [npm init -y] ---> command is used for install node dependecies.

2. [npm i redux] ---> command is used to install redux library alse have to write type: module in package.json file.

# 3 principles of Redux 

1. Single Source of Truth.
2. State must be immutable.
3. Reducer should be Pure.

## middleware.js

1. To install logger middleware have to use the command ---> [npm i redux-logger].

## db.json

To access the db.json file we have to install this to access it globally. 

For that we have to use the command ---> [npm i -g json-server].

After that type the command ---> [json-server db.json]. It will run the db.josn API.

[npm i axios] ---> for initialize the axios for API fetching.

## db.js

We cannot create async actions.

Async action --->

## code

async function initUser(){

    const {data} = await axios.get('http://localhost:3000/accounts/1')

    return {type : init, payload: data.amount};
}

This code will through error.

Actions must be syncronous. To overcome this problem we use the Thunk middleware.

[npm i redux-thunk] ---> to install Thunk middleware.