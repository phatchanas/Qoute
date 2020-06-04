import React, { useState } from 'react';
import './App.css';
import QuotesApi from './compontens/quotesApi';
import Quote from './compontens/quote'
import Granim from 'react-granim'
import { WiredCard} from 'react-wired-elements';




function App() {
  
  const [quote, setQuote] = useState('')
  return (
    <>
      <Granim id="granim">
        
      </Granim>
      <div className="App">
      
      <WiredCard fill="#F5F5F5" elevation={3}>      
       <h1>InstaDeep</h1>
      </WiredCard>
      <Quote quote={quote}/>
      <QuotesApi setQuote={setQuote}/>
    </div>
  </>

  )
}

export default App;
