import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const BlogPost = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        margin: 'auto'
      }}
    >
      <div style={{}}>
        <h1
          style={{
            fontSize: 40,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start',
          }}
        >
          TEST PAGE
        </h1>
        <p
          style={{
            fontSize: 15,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <ReactMarkdown source={this.props.desc} escapeHtml={false} /> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          eros, finibus in lacinia at, volutpat id diam. Nam augue quam, maximus
          a tellus in, faucibus tempor arcu. Maecenas ut ante imperdiet,
          lobortis nibh non, placerat magna. Sed vel nibh malesuada, hendrerit
          mi sed, congue lacus. Suspendisse tempor arcu nunc, ac sodales leo
          fringilla quis. Mauris lacinia imperdiet eros, non posuere enim
          egestas eget. Donec imperdiet rutrum felis, ac porttitor mauris
          eleifend nec. In id quam sed est feugiat tempus sit amet ac ligula.
          Donec aliquam orci et lectus tempor, et porta quam elementum. Nulla
          feugiat velit et malesuada bibendum. Sed vitae velit sit amet dolor
          interdum efficitur.
        </p>
      </div>
    </div>
    <Link to="/blog">Go back to blogs</Link>
  </Layout>
)

export default BlogPost
