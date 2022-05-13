import logo 
from './barber logo.png';
import './App.css';
import {useState} from 'react'
import MyDatePicker from './MyDatePicker';
import Button from '@mui/material/Button';
import  Prices from './Prices'
import First from './First';
import Second from './Second';
function App() {
  const [page, setPage] = useState(1)
  return (
    <div className="App">
      
      {page == 1 ? <First setPage={setPage}/> : <Second setPage={setPage}/>}
    </div>
  );
}

export default App;
