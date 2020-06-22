import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from  './header'
import styles from './header.module.css'

function Hello(){
  return <h1> Hello Function</h1>
}

ReactDOM.render(
  <div className={styles.container}>
    <Header/>
    <App />
    <Hello />
  </div>
  , document.getElementById('root')
)