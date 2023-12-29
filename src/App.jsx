
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Quotegenerator from './components/Quotegenerator';
function App() {
  const [quote,setQuote]=useState([])
  const base_url='https://dummyjson.com/quotes'

 
 const fetchData=async()=>{
  let randomNumber = Math.floor(Math.random() * 30) + 1;
  console.log(randomNumber);
  const result = await axios.get(base_url+'/'+randomNumber)
  console.log(result.data);
  setQuote(result.data)
 }
 console.log(quote);
 useEffect(()=>{fetchData()},[])

 

  return (
    <div className="App">
       <div  className='shadow p-3'>
      <Button style={{backgroundColor:'black'}} className='shadow border-0'  onClick={fetchData} variant="primary">Generate</Button>
      </div>
      
     
      <div style={{marginTop:'170px'}} className='' >
        <Quotegenerator data={quote}/>
      </div>
     
    </div>
  );
}

export default App;
