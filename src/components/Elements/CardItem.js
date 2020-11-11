import React from "react"

import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from "reactstrap"

const Article = (props) => (
  <div className="col-lg-3" >
    <Card className="card-default mb-3">
      <CardHeader><strong>{props.header}</strong><Button close onClick={props.deleteClicked}/></CardHeader>
      <CardBody>
        <CardTitle><p>numri: <strong>{+props.title}</strong></p></CardTitle>
        <CardText>
          saisa: {props.quantity} <br />
          {props.supplier}
        </CardText>
      </CardBody>
    </Card>
  </div>
)

export default Article