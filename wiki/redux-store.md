---
id: store
title: Store
description: 'API > Store: the core Redux store methods'
---
# What is redux-store:
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
> A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to `createStore`.

## Store Methods
- `getState()`
- `dispatch(action)`
- `subscribe(listener)`
- `replaceReducer(nextReducer)`

# Installation
Step 1: Setup your react project  
> You can set up a react project and configure babel, webpack on your own or instead you can use `create-react-app` to spin up a react project, and that is indeed what we are going to do now.
```
$ npx create-react-app my-react-redux-app
```
> Type the above command in your terminal / command prompt. Before this make sure that you have the latest version of `node` installed in your machine.
Here, my-react-redux-app is the name of the project folder

> Now change the directory (cd) to my-react-redux-app and then start (npm start) the server by typing it in your terminal / command prompt.
```
$ cd my-react-redux-app

$ npm start
```

Step 2: Install redux and react-redux
```
npm install redux react-redux
```
or
```
yarn add redux react-redux
```
Step 3: Setup Redux Store in your index.js
```
/src/index.js

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from '../src/App'
import './index.css';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)
```

This is the root component of react. It is responsible for rendering counter container component as a child.
```
/src/app.js

import React, { Component } from 'react';
import './App.css';
import Counter from '../src/container/appContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Counter/>
            </header>
         </div>
      );
   }
}
export default App;
```

The following is the container component which is responsible for providing Redux’s state to react component −
```
/container/counterContainer.js

import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
Given below is the react component responsible for view part −
```
/component/counter.js
import React, { Component } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Counter;
```
The following are the action creators responsible for creating an action −
```
/actions/index.js
export function increment() {
   return {
      type: 'INCREMENT'
   }
}
export function decrement() {
   return {
      type: 'DECREMENT'
   }
}
export function reset() {
   return { type: 'RESET' }
}
```

Below, we have shown line of code for reducer file which is responsible for updating the state in Redux.
```
reducer/index.js
const reducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      case 'RESET' : return 0 default: return state
   }
}
export default reducer;
```
Initially, the app looks as follows −
![](/public/global/1st.jpg)
