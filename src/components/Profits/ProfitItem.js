import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const ProfitItem = (props) => (
  <div className="col-lg-3">
    <Card color="gray" className="text-black">
      <CardHeader>
        {props.day} <Button close className="text-danger font-weight-bold" onClick={props.onRemove} />
      </CardHeader>
      <CardBody>
        <CardTitle>
          {props.date} {props.time}
        </CardTitle>
        <CardText>
          te ardhura: <strong>{props.profit}rsd</strong> <br />
          -shepenzime: <strong>{props.expenses}rsd</strong> <br />
          totali: <strong>{parseFloat(props.profit) - parseFloat(props.expenses)}</strong>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default ProfitItem;
