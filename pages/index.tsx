import { Checkbox, Menu, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import TwoSplitLayout from '../components/layouts/TwoSplitLayout';
import Components from '../components/components';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const CodeEditor = dynamic(import('../components/project-components/CodeEditor'), { ssr: false })

const { TabPane } = Tabs;

const DisplayComponents = ({ entries }) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <>
      <Checkbox onChange={() => setShowCode(!showCode)}>Show Code</Checkbox>
      <Tabs defaultActiveKey="1" onChange={() => { }}>
        {
          entries.map(([name, component], indx) => (
            <TabPane tab={name} key={`component-${indx}`}>
              {
                showCode ?
                  <CodeEditor value={component.code} />
                  :
                  React.createElement(component)
              }
            </TabPane>
          ))
        }
      </Tabs>
    </>
  )
}

const Home = ({ query }) => {
  const data = [
    {
      name: 'Sliders',
      component: 'SliderRepo',

    },
    {
      name: 'Cards',
      component: 'CardRepo'
    },
    {
      name: 'Forms',
      component: 'FormRepo'
    },
    {
      name: 'Banners',
      component: 'BannerRepo'
    }
  ];

  const component = query.component || data[0].component

  const componentEntries = Object.entries(Components[component])

  const activeMenu = data.find(d => d.component == query.component) || data[0]
  return (

    <TwoSplitLayout
      left={
        <Menu onClick={() => { }} selectedKeys={['1']} mode="vertical">
          {
            data.map(d => (
              <Menu.Item key={d.name} className={activeMenu.name == d.name ? 'active-selected' : ''}>
                <Link href={`/?component=${d.component}`}>
                  <a>
                    {d.name}
                  </a>
                </Link>
              </Menu.Item>
            ))
          }
        </Menu>
        // <List
        //   size="large"
        //   dataSource={data}
        //   renderItem={item => <List.Item>{item.name}</List.Item>}
        // />
      }
      right={
        <>
          <DisplayComponents entries={componentEntries} />
        </>
      }
    >

    </TwoSplitLayout>
  )
}

Home.getInitialProps = async context => {
  const { query } = context;
  return { query }
}

export default Home;