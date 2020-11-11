import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";
import Article from "../Elements/CardItem";
import ModalError from "../Elements/Modal";
import Spinner from "../Elements/Spinner";
import AddArticlesFrom from "./AddArticlesForm";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://my-market-bb92c.firebaseio.com/articles.json")
      .then((resData) => {
        resData = resData.data;
        const loadedData = [];
        // eslint-disable-next-line
        for (const key in resData) {
          loadedData.push({
            id: key,
            productId: resData[key].productId,
            name: resData[key].name,
            quantity: resData[key].quantity,
            supplier: resData[key].supplier,
          });
        }
        setArticles(loadedData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      })

    return () => {
      setLoading(false);
      setModalOpen(false);
    }
  }, [setArticles, setLoading, setModalOpen])

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  const removeArticleHandler = (articleId) => {
    setLoading(true)
    axios
      .delete(
        `https://my-market-bb92c.firebaseio.com/articles/${articleId}.json`
      )
      .then((res) => {
        setLoading(false);
        setArticles((prevIngredients) =>
          prevIngredients.filter((ingredient) => ingredient.id !== articleId)
        );
        console.log(res)
      })
      .catch((err) => {
        setModalOpen(true)
      });
  };

  const addArticleHandler = (article) => {
    setLoading(true);
    axios
      .post("https://my-market-bb92c.firebaseio.com/articles.json", article)
      .then((responseData) => {
        setArticles((prevArticles) => [
          ...prevArticles,
          { ...article, id: responseData.data.name },
        ]);
        setLoading(false);
      })
      .catch((err) => {
        setModalOpen(true);
        setLoading(false);
        console.log(err);
      });
  };

  const articleCards = articles.map((art) => (
    <Article
      key={art.id}
      header={art.name}
      title={art.productId}
      quantity={art.quantity}
      supplier={art.supplier}
      deleteClicked={() => removeArticleHandler(art.id)}
    />
  ));

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>Artikujt</div>
      </div>

      <AddArticlesFrom onAddArticle={addArticleHandler} />
      <Row className="m-1">
        <ModalError isModalOpen={isModalOpen} toggleModal={toggleModal} />
        {!isLoading ? articleCards : <Spinner />}
      </Row>
    </ContentWrapper>
  );
};

export default Articles;
