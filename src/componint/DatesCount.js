import React from 'react';
import { Col, Row } from "react-bootstrap";


const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center my-2">
          <Col sm="8" className="">
            لديك اليوم {person.length} مواعيد
          </Col>
        </Row>
  );
}

export default DatesCount;
