import React, { useState } from 'react';
import './App.css';
import QuotesApi from './compontens/quotesApi';
import Quote from './compontens/quote'



function App() {
  const [quote, setQuote] = useState('')
  return (
    <div className="App">
    <h1>InstaDeep</h1>
    <Quote quote={quote}/>
    <QuotesApi setQuote={setQuote}/>
  </div>

  )
}

export default App;
