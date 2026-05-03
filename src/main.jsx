import React, {Component} from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

class ErrorBoundary extends Component{
  constructor(props){
    super(props)
    this.state = { error: null, info: null }
  }
  componentDidCatch(error, info){
    console.error('Render error:', error, info)
    this.setState({ error: error?.toString(), info: info?.componentStack })
  }
  render(){
    if(this.state.error){
      return (
        <div style={{padding:24,fontFamily:'monospace'}}>
          <h2>App render error</h2>
          <pre style={{whiteSpace:'pre-wrap',color:'#900'}}>{this.state.error}</pre>
          <pre style={{whiteSpace:'pre-wrap'}}>{this.state.info}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </HelmetProvider>
)
