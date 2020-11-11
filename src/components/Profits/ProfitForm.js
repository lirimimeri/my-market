import React, { useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "reactstrap";

const ProfitForm = (props) => {
  const [profit, setProfit] = useState("");
  const [expenses, setExpenses] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const fullDate = new Date();

    // get day ex. monday
    const weekday = ['e Diel', 'e Hene', 'e Marte', 'e Merkure', 'e Enjte', 'e Premte', 'e Shtune']
    const day = weekday[fullDate.getDay()];

    //get date ex.10/04.2019
    const dateArray = [fullDate.getDate(),  fullDate.getMonth(), fullDate.getFullYear()]
    const date = dateArray.join('/')

    //get time ex. 22:30
    const timeArray = [fullDate.getHours(), fullDate.getMinutes()]
    const time = timeArray.join(':')


    const item = {
      profit: profit,
      expenses: expenses,
      day: day,
      time: time,
      date: date
    };

    props.onAdd(item);
    clearForm();
  };

  const clearForm = () => {
    setExpenses('')
    setProfit('')
  };

  return (
    <Card className="card-default">
      <CardHeader>shto bilancin</CardHeader>
      <CardBody>
        <form onSubmit={submitHandler} className="m-auto">
          <div className="form-row">
            <div className="col-auto">
              <Input
                type="text"
                id="profit"
                placeholder="fitime"
                value={profit}
                onChange={(event) => {
                  setProfit(event.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <Input
                type="text"
                id="expenses"
                placeholder="shpenzime"
                value={expenses}
                onChange={(event) => {
                  setExpenses(event.target.value);
                }}
              />
            </div>
            <Button className="btn-lg" color="primary" type="submit">
              Shto
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default ProfitForm;
