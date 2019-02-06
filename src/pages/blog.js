import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'


class SecondPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    axios.get('/.netlify/functions/trello').then((res)=>{
      console.log(JSON.stringify(res))
    })
  }
  render(){
  return(
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
  }
}

export default SecondPage
