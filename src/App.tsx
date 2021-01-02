import React, { Component } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import { getCharacters } from './services/marvel-service';
import './styles/main.scss';




export class Home extends Component {



  async componentDidMount(){
    const response = await getCharacters();
    console.log(response)
  }
  render() {
    const { REACT_APP_PUBLİC_KEY } = process.env;
    console.log(REACT_APP_PUBLİC_KEY)
    return (
      <div>
        <p>example</p>
      </div>
    )
  }
}


function App() {
  return (
   <Router>
     <Switch>
       <Route exact to="/" component={Home}/>
     </Switch>
   </Router>
  );
}

export default App;
