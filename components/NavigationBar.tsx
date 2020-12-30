import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'

const NavigationBar = ({ Router }) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[Router.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/clients">
        <Link href="/clients">
          <a>Clients</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/clients/create">
        <Link href="/clients/create">
          <a>Clients Form</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/batches">
        <Link href="/batches">
          <a>Batches</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
export default NavigationBar;