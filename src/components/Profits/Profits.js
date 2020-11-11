import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Row } from "reactstrap";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/actions'

import ContentWrapper from "../Layout/ContentWrapper";
import Modal from "../Elements/Modal";
// import SuppliersForm from "./SuppliersForm";
// import Supplier from "./Supplier";
import Spinner from "../Elements/Spinner";
import ProfitItem from "./ProfitItem";
import ProfitForm from "./ProfitForm";

const Profits = memo(( props ) => {
  const [profits, setProfits] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { onProfits } = props

  useEffect(() => {
    setLoading(true);
    axios
    .get("https://my-market-bb92c.firebaseio.com/profits.json")
    .then((resData) => {
      resData = resData.data;
      const loadedData = [];
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
          
        }
        setProfits(loadedData.reverse());
        setLoading(false);
        onProfits(profits)
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(true);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const removeProfitHandler = (profitId) => {
    setLoading(true);
    axios
      .delete(`https://my-market-bb92c.firebaseio.com/profits/${profitId}.json`)
      .then((res) => {
        setLoading(false);
        setProfits((prevProfits) =>
          prevProfits.filter((profit) => profit.id !== profitId)
        );        
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(true);
      });
  };

  const addProfitHandler = (profit) => {
    setLoading(true);
    axios
      .post("https://my-market-bb92c.firebaseio.com/profits.json", profit)
      .then((resData) => {
        setProfits((prevProfits) => [
          ...prevProfits,
          { ...profit, id: resData.data.name },
        ].reverse());

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setModalOpen(true);
        console.log(error);
      });
  };

  const profitItems = profits.map((profit) => (
    <ProfitItem
      key={profit.id}
      day={profit.day}
      date={profit.date}
      time={profit.time}
      profit={profit.profit}
      expenses={profit.expenses}
      onRemove={() => removeProfitHandler(profit.id)}
    />
  ));

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>Bilanci ditore</div>
      </div>
      <ProfitForm onAdd={addProfitHandler} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      {isLoading ? <Spinner /> : <Row>{profitItems}</Row>}
    </ContentWrapper>
  );
})

const mapDispatchToProps = (dispatch) => {
  return {
    onProfits: (profits) => dispatch(actions.profits(profits))
  }
}

export default connect(null, mapDispatchToProps)(Profits)