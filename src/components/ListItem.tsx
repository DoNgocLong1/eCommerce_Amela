import React from "react";
import { Col, Row } from "antd";
const ListItem: React.FC = () => {
  const cols = [];
  const colCount: number = 4;
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <div>Column</div>
      </Col>
    );
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        {cols}
        {cols}
      </Row>
      Another Row:
      <Row gutter={[16, 16]}>{cols}</Row>
    </>
  );
};

export default ListItem;
