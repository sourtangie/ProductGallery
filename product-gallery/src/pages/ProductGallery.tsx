import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ProductList } from "../components/products/ProductList";
import * as dataFunctions from "../util/GetData";

export const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function get() {
    setLoading(true);
    const productsFetch = await dataFunctions.getProductList();
    setProducts(productsFetch);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, []);
  return (
    <Container style={{ height: "100vh" }}>
      <Row>
        <p className="fs-1 dark-sienna">Our Products</p>
      </Row>
      <Row>
        {!loading ? (
          <ProductList items={products}></ProductList>
        ) : (
          /* LOADING STATE */
          <p className="fs-3">
            Loading Products... <Spinner animation="border"></Spinner>
          </p>
        )}
      </Row>
    </Container>
  );
};
