import color from "utils/color";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2em 0;
  a {
    text-decoration: none;
    width: fit-content;
  }
`;
export const CartBannerWrapper = styled.div`
  height: 40em;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
export const Banner = styled.img`
  width: 100%;
`;
export const BannerTitle = styled.h1`
  font-size: 5em;
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  color: ${color.whiteColor};
`;
export const CartContainer = styled.div`
  display: flex;
  gap: 2em;
  width: 100%;
  padding: 2em;
`;
export const CartWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  th {
    font-weight: normal;
  }
`;
export const TitleWrapper = styled.thead`
  width: 100%;
  height: fit-content;
  display: flex;
  font-size: 10px;
  justify-content: center;
  border-radius: 2em;
  overflow: hidden;
`;
export const TitleTr = styled.tr`
  width: 100%;
  height: fit-content;
  font-size: 1.5em;
  display: flex;
`;
export const TitleTh = styled.th`
  padding: 1em;
  flex: 1;
  color: #000;
  background-color: #ececec;
  font-size: 1.3em;
`;
export const TitleName = styled.th`
  flex: 3;
  padding: 1em;
  color: #000;
  background-color: #ececec;
  font-size: 1.3em;
`;
export const ItemWrapper = styled.tbody`
  background-color: ${color.backgroundColor};
  width: 100%;
  height: fit-content;
  font-size: 10px;
  display: flex;
  flex-direction: column;
`;
export const ItemTr = styled(TitleTr)`
  background: transparent;
`;
export const ItemTh = styled(TitleTh)`
  background: transparent;
  color: #fff;
`;
export const ItemName = styled.th`
  flex: 3;
  padding: 2em;
  background: transparent;
  color: #fff;
`;
export const ProductNameAndImgWrapper = styled.div`
  display: flex;
`;
export const ProductName = styled.p`
  font-size: 1.3em;
`;
export const ProductImg = styled.img`
  width: 5em;
  object-fit: cover;
`;
export const ProductUnitPrice = styled(ProductName)``;
export const ProductQuantity = styled(ProductName)``;
export const ProductTotal = styled(ProductName)``;
export const ProductRemove = styled(ProductName)`
  cursor: pointer;
`;
export const NoteWrapper = styled.div`
  flex: 1;
  padding: 1em;
  border: 1px solid #ececec;
  border-radius: 0.5em;
  background-color: ${color.backgroundItemColor};
`;
export const NoteTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  padding: 1em 0;
`;
export const NoteContent = styled.textarea`
  font-size: 1.5em;
  color: #fff;
  border: none;
  outline: none;
  background-color: ${color.backgroundItemColor};
  height: 20em;
  width: 100%;
  padding: 0.5em;
`;
export const SubTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1em;
  padding: 1em 0;
`;
export const SubTotalTitle = styled.h1`
  font-size: 2em;
  color: ${color.whiteColor};
`;
export const SubTotal = styled.p`
  font-size: 2em;
  color: ${color.whiteColor};
`;
export const PaymentButton = styled.button`
  width: 100%;
  color: ${color.whiteColor};
  font-size: 1.5em;
  background-color: rgb(59, 183, 126);
  padding: 1em;
  transition: 0.5s ease;
  border: none;
  :hover {
    font-weight: bold;
    background-color: rgb(150 85 163);
  }
`;
export const GotoProductPage = styled.div`
  color: ${color.whiteColor};
  font-size: 1.5em;
  background-color: ${color.backgroundColor};
  padding: 1em 2em;
  border: 1px solid ${color.whiteColor};
  width: fit-content;
  margin-left: 2em;
  transition: 0.5s ease;
  font-weight: bold;
  :hover {
    color: #000;
    background-color: ${color.whiteColor};
  }
`;
