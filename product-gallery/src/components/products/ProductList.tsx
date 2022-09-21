import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";
import { ProductListItem } from "./ProductListItem";

export const ProductList = (props: { items: Product[] }) => {
  const navigate = useNavigate();

  const handleProductClick = (productItem: Product) => {
    console.log("click");
    navigate("" + productItem.id, { state: productItem });
  };
  return (
    <ListGroup style={{}}>
      {props.items.map((item) => (
        <ProductListItem
          item={item}
          onClick={() => handleProductClick(item)}
          key={item.id}
        />
      ))}
    </ListGroup>
  );
};
