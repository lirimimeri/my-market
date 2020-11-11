import React, { useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "reactstrap";

const SuppliersForm = ( props ) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [telNumber, setNumber] = useState("");
  const [website, setWebsite] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const supplier = {
      name: name,
      mobile: telNumber,
      website: website,
      company: company
    };

    props.onAddSupplier(supplier);
    clearForm();
  }

  const clearForm = () => {
    setCompany('')
    setName('')
    setNumber('')
    setWebsite('')
  }
  

  return (
    <Card className="card-default">
      <CardHeader>Shto furnizues</CardHeader>
      <CardBody>
        <form
          onSubmit={submitHandler}
          className="m-auto"
        >
          <div className="form-row align-items-center">
            <div className="col-auto">
              <Input
                className="col-auto"
                type="text"
                id="name"
                placeholder="emri i furnizuesit"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <Input
                type="text"
                id="company"
                placeholder="kompania"
                value={company}
                onChange={(event) => {
                  setCompany(event.target.value);
                }}
              />
            </div>

            <div className="col-auto">
              <Input
                type="text"
                id="website"
                placeholder="website"
                value={website}
                onChange={(event) => {
                  setWebsite(event.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <Input
                type="text"
                id="telNumber"
                placeholder="numri i telefonit"
                value={telNumber}
                onChange={(event) => {
                  setNumber(event.target.value);
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

export default SuppliersForm;
