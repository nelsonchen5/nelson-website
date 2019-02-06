import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'


class SecondPage extends React.Component {
  constructor() {
    super()
    this.state ={
      trelloData: {}
    }
  }

  componentDidMount() {
    axios.get('/.netlify/functions/trello').then((res)=>{
      this.setState({trelloData:res})
    })
  }
  render(){
  return(
  <Layout>
    <h1>Blog</h1>
    <p>Welcome to my blog</p>
  {/*make a list of all cards sorted by date*/}
  {/*make all cards clickable*/}
  {/*onClick, make it link to a page with just blog post and comments*/}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
  }
}

export default SecondPage
