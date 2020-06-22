import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from  './header'
import styles from './header.module.css'

function Hello(props){
return <h1> Hello {props.name}</h1>
}

ReactDOM.render(
  <div className={styles.container}>
    <Header />
    <App />
    <Hello name='MY COMPANY' />
    <Hello name='Saad' />
    <Hello name='Aslam' />
  </div>
  , document.getElementById('root')
)