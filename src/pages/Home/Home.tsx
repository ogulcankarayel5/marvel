import { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Card, { CardImage, CardOverlay, CardTitle } from "../../components/Card/Card";
import { getCharacters } from "../../store/marvel/actions";
import { getResultsSelector } from "../../store/marvel/selectors";
import { AppState } from "../../store/root";
import "./style.scss";

type Props = StateProps & DispatchProps;

export class Home extends Component<Props&RouteComponentProps<any>, any> {

  state = {
    page:1,
    loading:false
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.onScroll, false);
    this.props.getCharacters('offset=0');
  }
 
  loadMore = () => {
    this.setState((prevState:any) => ({
      page:prevState.page+1,
      loading:true,
    }),this.loadData)
  }
 
  loadData = () => {
    this.props.getCharacters(`offset=${this.state.page*30}`)
    this.setState({loading:false})
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
 
  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.data.length && !this.state.loading
    ) {
      this.loadMore();
    }
  }
  goItem = (id:number) => {
    this.props.history.push(`/${id}`)
  }

  render() {
    const { data } = this.props;
    

    return (
      <div className="home">
        <h2 className="home__title">Marvel Characters</h2>
        {data ? (data.map((item: any, index: number) => (
          
          item.map((i:any,index:number) => (
            <Card key={index}>
            <CardImage path={i.thumbnail.path}/>
            <CardOverlay>
              <CardTitle name={i.name}/>
              <button className="home__button" onClick={() => this.goItem(i.id)}>More...</button>
              
            </CardOverlay>
          </Card>
          ))
        
        ))) : <p>loading</p>}
      </div>
    );
  }
}

interface StateProps {
  data: object[] | any;
  loading: boolean;
}

interface DispatchProps {
  getCharacters: (params?: string) => any;
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    loading: state.marvel.loading,
    data: getResultsSelector(state),
  };
};

const mapDispatchToProps: DispatchProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
