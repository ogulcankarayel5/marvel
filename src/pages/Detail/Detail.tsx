import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Card, {
  CardImage,
  CardOverlay,
  CardTitle
} from "../../components/Card/Card";
import { getCharacterById, getComicById } from "../../store/marvel/actions";
import { getCharacterSelector } from "../../store/marvel/selectors";
import { AppState } from "../../store/root";
import "./style.scss";

type Props = StateProps & DispatchProps;
export class Detail extends Component<Props & RouteComponentProps<any>, any> {
  componentDidMount(): void {
    this.props.getCharacterById(this.props.match.params.id);
    this.props.getComicById(this.props.match.params.id);
  }

  render() {
    const { data, comic, loading } = this.props;

    return loading ? (
      <p>loading</p>
    ) : (
      data.map((item: any, index: number) => (
        <div className="detail" key={index} data-testid="detail">
          <div className="detail__up">
            <h2 className="detail__title">{item.name}</h2>
            <div className="detail__body">
              <div className="detail__text">
                <h2 className="detail__subtitle">WHO AM I</h2>
                <p className="detail__description">
                  {item.description.length > 0
                    ? item.description
                    : "I don't have a description.Sorry!"}
                </p>
              </div>
              <div className="detail__image">
                <img src={`${item.thumbnail.path}/detail.jpg`} alt="Marvel" />
              </div>
            </div>
          </div>
          <div className="detail__comics">
            {comic.results ? (
              comic.results.map((item: any, index: number) => (
                <Card key={index}>
                  <CardImage path={item.thumbnail.path} />
                  <CardOverlay>
                    <CardTitle name={item.title} />
                  </CardOverlay>
                </Card>
              ))
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      ))
    );
  }
}

interface StateProps {
  loading: boolean;
  data: any;
  comic: any;
}

interface DispatchProps {
  getCharacterById: (id: number) => void;
  getComicById: (id: number) => void;
}

const mapStateToProps = (state: AppState, ownProps: any): StateProps => {
  return {
    loading: state.marvel.loading,
    data: getCharacterSelector(state),
    comic: state.marvel.comics,
  };
};

const mapDispatchToProps: DispatchProps = {
  getCharacterById,
  getComicById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
