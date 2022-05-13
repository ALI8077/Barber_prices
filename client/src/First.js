import logo from './barber logo.png';
import React from 'react';
import './App.css';
import {useState} from 'react'
import MyDatePicker from './MyDatePicker';
import Button from '@mui/material/Button';


const First = ({setPage}) => {
    const [value, setValue] = React.useState(null);
    const handleSubmit = () => {
      console.log(value)
      const config = {
          "method" : "POST",
          "headers" : {
              "Content-Type" : "application/json"
          },
          "body" : JSON.stringify({
            value
          })
      }
      fetch('/prices', config)
      setPage(2)
  }
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <input type="date" onChange={(e) => {setValue(e.target.value)}}></input>
        <Button variant="outlined" onClick={() => {
          
          handleSubmit()
        }}>Next</Button>
      </header>
    )
}

export default First


