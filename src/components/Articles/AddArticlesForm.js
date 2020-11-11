import React, { useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "reactstrap";

const AddArticlesForm = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");
  const [supplier, setSupplier] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const article = {
      productId: id,
      name: name,
      quantity: quantity,
      supplier: supplier,
    };

    props.onAddArticle(article);
    clearForm();
  };

  const clearForm = () => {
    setId("");
    setName("");
    setQuantity("");
    setSupplier("");
  };

  return (
    <Card className="card-default">
      <CardHeader>Shto artikuj</CardHeader>
      <CardBody>
        <form
          onSubmit={submitHandler}
          style={{ textAlign: "center" }}
          className="m-auto"
        >
          <div className="form-row align-items-center">
            <div className="col-auto">
          
              <Input
                placeholder="emri i produktit"
                className="col-auto"
                type="text"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="col-auto">
         
              <Input
                placeholder="shifra"
                type="text"
                id="id"
                value={id}
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </div>

            <div className="col-auto">
   
              <Input
                placeholder="sasia"
                type="text"
                id="quantity"
                value={quantity}
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
            </div>
            <div className="col-auto">
            <Input
              placeholder="furnizuesi"
              type="text"
              id="supplier"
              value={supplier}
              onChange={(event) => {
                setSupplier(event.target.value);
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

export default AddArticlesForm;
