import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CCard = (props) => {
  return (
    <Card>
      <CardImg width="100%" src={props.site.image} alt={props.site.name} />
      <CardImgOverlay>
        <CardTitle>{props.site.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CCard;
