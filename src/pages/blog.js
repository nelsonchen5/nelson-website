import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import dummyBlogs from '../components/dummyBlogs'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

class SecondPage extends React.Component {
  constructor() {
    super()
    this.state = {
      trelloData: [],
      sortedData: []
    }

  }

  componentDidMount() {
    axios.get('/.netlify/functions/trello').then(res => {
      if (typeof res.data === 'array') {
        console.log(res)
        this.setState({ trelloData: res.data })
        this.sortData()
      } else {
        this.setState({ trelloData: dummyBlogs })
        this.sortData()
        console.log(this.state.trelloData)
      }
    })
  }

  sortData = () => {
    const sortedData = this.state.trelloData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

    const published = this.state.trelloData.filter((item)=>{
      return (item.labels.length > 0 && item.labels[0].name ==='Published')
    })
  
    this.setState({sortedData: published})
  }

  convertMarkdown = () =>{
    // let convertedData = this.state.sortedData.map((item)=>{
    //   item.desc = converter.makeHtml(item.desc)
    // })
    // this.setState({sortedData:convertedData})
  }
  render() {
    return (
      <div>
        <div>
          <h1 id="header">Blog</h1>
          <p style={{ textAlign: 'center' }}>Welcome to my blog</p>
        </div>
        {/*make a list of all cards sorted by date*/}
        {this.state.sortedData.map(item => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingRight: 400,
              paddingLeft: 400
            }}
          >
                <div 
                style={{
   
            }} >
                <Link
                  to="/blogpost"
                  style={{
                    fontSize: 40,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                  }}
                >
                  {' '}
                  {item.name}{' '}
                </Link>
            <img
              style={{
                borderRadius: 4,
                padding: 5,
                width: '70%',
                display: 'flex',
                marginRight: 50,
                flexGrow: 0,
                flexShrink: 0,
                margin: 'auto'
              }}
              src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
              <p
                style={{
                  fontSize: 15,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {' '}
                <ReactMarkdown source={item.desc}/> </p>
            </div>
          </div>
        ))}
        {/*make all cards clickable*/}
        {/*onClick, make it link to a page with just blog post and comments*/}
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default SecondPage
