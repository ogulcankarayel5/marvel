import { Component } from "react";
import { connect } from "react-redux";
import { getCharacters } from "./store/marvel/actions";
import { AppState } from "./store/root";

export class Home extends Component<any,any> {

    componentDidMount(){    
        this.props.getCharacters()
    }
 
    render() {
      console.log(this.props.result)
      return (
        <div>
          <p>example</p>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state:AppState) => {
    return {
      result : state.marvel.results
    }
  }
  
  const mapDispatchToProps = {
    getCharacters
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Home)
  