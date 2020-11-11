import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";
import Modal from "../Elements/Modal";
import SuppliersForm from "./SuppliersForm";
import Supplier from "./Supplier";
import Spinner from "../Elements/Spinner";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://my-market-bb92c.firebaseio.com/suppliers.json")
      .then((resData) => {
        resData = resData.data;
        const loadedData = [];
        // eslint-disable-next-line
        for (const key in resData) {
          loadedData.push({
            id: key,
            mobile: resData[key].mobileNumber,
            company: resData[key].company,
            website: resData[key].website,
            name: resData[key].name,
          });
        }
        setSuppliers(loadedData);
        console.log(loadedData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(true);
      });
  }, [setSuppliers, setLoading, setModalOpen]);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const removeSupplierHandler = (supplierId) => {
    setLoading(true);
    axios
      .delete(
        `https://my-market-bb92c.firebaseio.com/suppliers/${supplierId}.json`
      )
      .then((res) => {
        setLoading(false);
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier.id !== supplierId)
        );
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(true);
      });
  };

  const addSupplierHandler = (supplier) => {
    setLoading(true);
    axios
      .post("https://my-market-bb92c.firebaseio.com/suppliers.json", supplier)
      .then((resData) => {
        setSuppliers((prevSuppliers) => [
          ...prevSuppliers,
          { ...supplier, id: resData.data.name },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setModalOpen(true);
        console.log(error);
      });
  };

  const suppliersCards = suppliers.map((supplier) => (
    <Supplier
      key={supplier.id}
      header={supplier.name}
      title={supplier.company}
      mobile={+supplier.mobile}
      website={supplier.website}
      onRemove={() => removeSupplierHandler(supplier.id)}
    />
  ));

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>Furnizuesit</div>
      </div>
      <SuppliersForm onAddSupplier={addSupplierHandler} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <Row>{isLoading ? <Spinner /> : suppliersCards}</Row>
    </ContentWrapper>
  );
};

export default Suppliers;