import {
  CardContainer,
  CardImage,
  CardBody,
  CardProductName,
  CardPrice,
  CardTitle,
  CardText,
} from "./styles/Card";

import Button from "./Button";

const Card = (props) => {
  return (
    <CardContainer width="500px">
      <CardImage src={props.isi.imageUrl} />
      <CardBody>
        <CardPrice>{props.isi.price}</CardPrice>
        <CardProductName>{props.isi.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};
export default Card;
