import React from 'react'
import App from 'next/app'
import { loadGetInitialProps } from 'next-server/dist/lib/utils'
import WrappedLayout from '../components/layouts/WrappedLayout'
import * as NProgress from 'nprogress/nprogress'
import Router from 'next/router'
import '../assets/styles.less';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = await loadGetInitialProps(Component, ctx)
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <WrappedLayout>
        <Component {...pageProps} />
      </WrappedLayout>
    )
  }
}

export default MyApp