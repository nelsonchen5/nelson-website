import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import dummyBlogs from '../components/dummyBlogs'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/with-html'

class SecondPage extends React.Component {
  constructor() {
    super()
    this.state = {
      trelloData: [],
      sortedData: []
    }

  }

  async componentDidMount() {
    await axios.get('/.netlify/functions/trello').then(res => {
        console.log(res)
        this.setState({ trelloData: dummyBlogs })
        this.sortData()   
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
              justifyContent: 'center',
              width: '50%',
              margin: 'auto'
            }}
          >
                <div 
                style={{
   
            }} >
                <Link
                  to={`/blogpost/`}
                  style={{
                    fontSize: 40,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                  }}
                  state={{
                    name: item.name,
                    desc: item.desc
                  }}
                >
                  {' '}
                  {item.name}{' '}
                </Link>
              <p
                style={{
                  fontSize: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '90%',
                  margin: 'auto'
                }}
              >
                {' '}
                <ReactMarkdown source={item.desc} escapeHtml={false}/> </p>
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
