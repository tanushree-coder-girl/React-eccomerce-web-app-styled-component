import styled from "styled-components";

export const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

export const ProductImageContainer = styled.div`
  padding-top: 10px;
  width: 60%;
`;

export const ProductImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductInfoHeading = styled.h3`
  color: darkslategray;
  font-size: 1em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
`;
export const ProductInfoArticle = styled.article`
  padding: 20px;
`;
export const ProductInfoFinancePrice = styled.div`
  color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;
export const ProductInfoStock = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 10px;
  background: lightgray;
  height: 20%;
  width: 30%;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;
export const ProductInfoAction = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductInfoActionButton = styled.button`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: lightgray;
  border: 1px solid slategray;
  font-weight: bold;
`;
export const ProductInfoDescription = styled.div``;
export const ProductInfoStockLabel = styled.label`
  padding-bottom: 5px;
`;
