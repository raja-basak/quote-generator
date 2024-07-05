 import axios from 'axios';
 import {useState} from 'react';
 
 const Quote =()=>{
   const [quote, setQuote]=useState('');
   const generate=()=>{
     axios.get('https://v2.jokeapi.dev/joke/Any?type=single').then((response)=>{setQuote(response.data.joke)}).catch((Error)=>{console.log(Error)});
   }
  return (
    <div className="container p-3">
      <div className="card p-3 text-center bg-success text-light">
        <h6>Quote Generator</h6>
        <button onClick={generate} className="btn btn-light my-3">
          Generate Quote
        </button>
        <p>{quote}</p>
      </div>
    </div>
    );
}
export default Quote;