
import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json'
import colors from './json/colors.json'


function App() {
  const getrandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  }

  const [quoteRandom, setQuoteRandom] = useState(getrandomFromArray(quotes));
  const [colorRandom, setColorRandom] = useState(getrandomFromArray(colors));

  const handleClick = () => {
    setQuoteRandom(getrandomFromArray(quotes))
    setColorRandom(getrandomFromArray(colors))
  }

  const objStyle = {
    backgroundColor : colorRandom
  }
  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
      
    </div>
  )
}

export default App
