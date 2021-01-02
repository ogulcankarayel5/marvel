import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Home from './Home';
import { store } from './store/root';
import './styles/main.scss';







export function App() {
  return (
 <Provider store={store}>
     <Router>
     <Switch>
       <Route exact to="/" component={Home}/>
     </Switch>
   </Router>
 </Provider>
  );
}







