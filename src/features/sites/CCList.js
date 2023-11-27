import { SITES } from '../../app/shared/SITES';
import { Col, Row } from 'reactstrap';
import CCard from './CCard';

const CCList = () => {
  return (
    <Row className="ms-auto">
      {SITES.map((site) => {
        return (
          <Col md="5" className="m-4" key={site.id}>
            <CCard site={site} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CCList;
