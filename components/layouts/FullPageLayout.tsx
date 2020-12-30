import React from 'react';
import { Row, Col, Anchor } from 'antd';

const { Link } = Anchor;

const FullPageLayout = ({ children }) => {

  return (
    <Row gutter={16} style={{padding: 24}}>
      <div style={{ background: '#fff', padding: 12, minHeight: 800 }}>
        <Col span={8}>
          <Anchor style={{padding: 24}}>
            <Link href="#API" title="API"/>
            <Link href="#Testing" title="API"/>
          </Anchor>
        </Col>
        <Col span={16}>
            {children}
        </Col>
      </div>
    </Row>
  )
};

export default FullPageLayout;