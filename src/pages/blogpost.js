import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const BlogPost = (props) => (
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
          {props.location.state.name ? props.location.state.name : null}
        </h1>
        <p
          style={{
            fontSize: 15,
            display: 'flex',
            flexDirection: 'column',
            flexDirection: 'column',
            width: '90%',
            margin: 'auto'
          }}
        >
          <ReactMarkdown source={props.location.state.desc} escapeHtml={false} />

        </p>
      </div>
    </div>
    <Link to="/blog">Go back to blogs</Link>
  </Layout>
)

export default BlogPost
