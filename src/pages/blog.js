import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'


class SecondPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // axios.get('https://api.trello.com/1/cards/5c51f4e868d8af5615ce8cc9?fields=all&attachments=false&attachment_fields=all&members=false&membersVoted=false&checkItemStates=false&checklists=none&checklist_fields=all&board=false&list=false&pluginData=false&stickers=false&sticker_fields=all&customFieldItems=false&key=f1915f180d732d7c303fbce8c7c484a6&token=17b407c3e06c56b0b9f16a316f91e60c38e386a075b84a54edef5fe0c216571c').then((res)=>{
    //   console.log(res)
    // })
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

const token = '17b407c3e06c56b0b9f16a316f91e60c38e386a075b84a54edef5fe0c216571c'
const key = 'f1915f180d732d7c303fbce8c7c484a6'
const secret = 'f894820edd6f18a79418988c23e138779f5ed7415862ed7006e4a11288c039f8'