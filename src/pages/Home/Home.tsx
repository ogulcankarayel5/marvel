import { Component } from "react";
import { connect } from "react-redux";
import Card, { CardButton, CardImage, CardOverlay, CardTitle } from "../../components/Card/Card";
import { getCharacters } from "../../store/marvel/actions";
import { getResultsSelector } from "../../store/marvel/selectors";
import { AppState } from "../../store/root";
import "./style.scss";

type Props = StateProps & DispatchProps;

export class Home extends Component<Props, any> {
  componentDidMount(): void {
    this.props.getCharacters();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="home">
        <h2 className="home__title">Marvel Characters</h2>
        {data ? (data.map((item: any, index: number) => (
          <>
           <Card>
             <CardImage path={item.thumbnail.path}/>
             <CardOverlay>
               <CardTitle name={item.name}/>
               <CardButton/>
             </CardOverlay>
           </Card>
          </>
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
  getCharacters: (params?: string) => void;
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
