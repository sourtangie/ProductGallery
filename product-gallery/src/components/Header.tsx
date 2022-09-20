import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  box-sizing: border-box;
  background-color: lightgray;
  display: flex;
  align-items: baseline;
  div {
    p {
      border: 1px solid red;
      float: left;
      // margin: 0 .5em;
      padding: 0 0.5em;
    }
    img {
      width: 90px;
    }
  }
  ul {
    list-style-type: none;

    width: 100%;
    li {
      display: inline-block;
      a {
        //display: inline-block;
        padding: 0 0.5em;
        text-decoration: none;
        //width: 100%;
      }
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Image
          src={
            "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg"
          }
        />
      </div>
      <ul>
        <li>
          <Link to="/ProductGallery/products">Products</Link>
        </li>
      </ul>
    </StyledHeader>
  );
};
