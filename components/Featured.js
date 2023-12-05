import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Bg = styled.div`
  background-color: #2F4F4F;
  color:#fff;
  padding: 50px 20px;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); // Each column takes up half the space
    gap: 40px;
    align-items: center; // Align items vertically

    img {
      width: 100%; // Full width of the column
      height: auto; // Maintain aspect ratio
      max-height: 200px; // Limit the maximum height
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1.1fr 0.9fr; // Adjust the ratio if needed
      img {
        max-height: none; // Remove max height restriction on larger screens
      }
    }
    `;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);

  if (!product) {
    return null;
  }

  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://tech-trove-ecommerce.s3.amazonaws.com/1701803477004.png" alt={product.title || 'Product image'} />
          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}