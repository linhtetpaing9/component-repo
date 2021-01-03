import { Menu, Tabs } from 'antd';
import React from 'react';
import TwoSplitLayout from '../components/layouts/TwoSplitLayout';
import Components from '../components/components';
import Link from 'next/link';

const { TabPane } = Tabs;

const DisplayComponents = ({ entries }) => {
  return (
    <Tabs defaultActiveKey="1" onChange={() => { }}>
      {
        entries.map(([key, value], indx) => (
          <TabPane tab={key} key={`component-${indx}`}>
            {React.createElement(value)}
          </TabPane>
        ))
      }
    </Tabs>
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
        <DisplayComponents entries={componentEntries} />
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