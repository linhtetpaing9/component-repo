import React, { useState } from 'react';
import FullPageLayout from '../components/layouts/FullPageLayout';
import dynamic from 'next/dynamic'
import { Col, Row } from 'antd';
const CodeEditor = dynamic(import('../components/project-components/CodeEditor'), { ssr: false })

const Custom = () => {
  const [value, setValue] = useState('div');

  return (
    <FullPageLayout>
      <Row>
        <Col span={12}>
          <div className="bg-white text-center">
            <div className="min-h-500 my-10">
              <div dangerouslySetInnerHTML={{ __html: value }}></div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <CodeEditor
            key={`custom-component-editor-tsx`}
            value={value}
            mode="tsx"
            onChange={(newValue) => setValue(newValue)}
            readOnly={false}
          />
        </Col>

      </Row>
    </FullPageLayout >
  )
}

export default Custom;