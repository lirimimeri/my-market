import React from "react";
import { withNamespaces } from "react-i18next";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import * as action from "../../store/actions/actions";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col, Button } from "reactstrap";
import Time from "../Elements/Time";
import MonthlyGraph from "../Graphs/MonthlyGraph";
import YearlyGraph from "../Graphs/YearlyGraph";
import Spinner from "../Elements/Spinner";

class SingleView extends React.Component {
  state = {
    monthlyProfitsArrayData: [],
    average: [],
    profits: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://my-market-bb92c.firebaseio.com/profits.json")
      .then((resData) => {
        resData = resData.data;
        const loadedData = [];
        const arrayData = [];
        // eslint-disable-next-line
        for (const key in resData) {
          loadedData.push({
            id: key,
            day: resData[key].day,
            time: resData[key].time,
            date: resData[key].date,
            profit: resData[key].profit,
            expenses: resData[key].expenses,
          });
          arrayData.push(parseInt(resData[key].profit));
        }
        this.setState({ profits: loadedData });
        this.setState({ monthlyProfitsArrayData: arrayData });
        // console.log(this.state.arrayData)
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });

    const array = this.filterArray(this.state.monthlyProfitsArrayData);

    this.setState({ average: array });
    
  }

  filterArray = (array) => {
    array.filter((el, index) => {
      return index % 2 === 0;
    });
  };

  render() {
    return (
      <ContentWrapper>
        <div className="content-heading">Kryefaqja</div>

        {/* Navigation buttons / time */}

        <Row>
          <Col xl={2} lg={12} md={12}>
            <Button
              color="primary"
              className="btn-block btn-lg m-1"
              onClick={() => this.props.history.push("/profits")}
            >
              Bilancet
            </Button>
          </Col>
          <Col xl={2} lg={6} md={12}>
            <Button
              color="dark"
              onClick={() => this.props.history.push("/articles")}
              className="btn-block btn-lg m-1"
            >
              Artikujt
            </Button>
          </Col>
          <Col xl={2} lg={6} md={12}>
            <Button
              color="secondary"
              className="btn-block btn-lg m-1"
              onClick={() => this.props.history.push("/suppliers")}
            >
              Furnizuesit
            </Button>
          </Col>
          <Col xl="4  ml-auto mt-1" lg={12} md={12}>
            <Col>
              <Time />
            </Col>
          </Col>
        </Row>

        {/*END of Navigation buttons / time */}

        {/* Sparklines */}

        <Col xl={12} md={12} className="mb-4">
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <MonthlyGraph data={this.state.monthlyProfitsArrayData} />
          )}
        </Col>

        <Col xl={12} md={12}>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <YearlyGraph data={[1,4,2,3,5,4,2,1]} />
          )}
        </Col>
        {/* END of Sparklines */}
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profits: state.profits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfits: (profits) => dispatch(action.profits(profits)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withNamespaces("translations")(SingleView)));
