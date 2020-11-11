import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Supplier = (props) => (
  <div className="col-lg-3">
    <Card outline color="warning" className="mb-3">
      <CardHeader className="text-white bg-warning">
        {props.header} <Button close onClick={props.onRemove}/>
      </CardHeader>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
          {props.mobile} <br />
          {props.website}
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default Supplier;
