import React from 'react';
import { Switch, Row, Col } from '@tencent/tdesign-react';

export default function SwitchBasic() {
  return (
    <div className="tdegsin-demo-switch">
      <Row>
        <Col span={2}>
          <Switch size="large" />
        </Col>
        <Col span={2}>
          <Switch size="large" loading />
        </Col>
        <Col span={2}>
          <Switch size="large" defaultValue loading />
        </Col>
      </Row>
    </div>
  );
}
