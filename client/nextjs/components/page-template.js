import Head from 'next/head'
import { Fragment } from 'react'

export default ({ title = 'Placeholder for title', children }) => {
  return (
    <Fragment>
      <Head>
        <title key='page-title'>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='/static/common.css' />
      </Head>
      <div className='padding-1'>{children}</div>
      <div className='margin-3-t padding-1'>
        <hr className='margin-n1-h' />
        <div className='meta padding-half-v'>Footer this is</div>
      </div>
    </Fragment>
  )
}
