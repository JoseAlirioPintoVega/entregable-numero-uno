import React from 'react'
import Author from './Author'
import BtnQuote from './BtnQuote'
import IconQuote from './IconQuote'
import Quote from './Quote'


const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {
  
  const objStyle = {
    color: colorRandom
  }
  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (
  
    <article className='card' style={objStyle}> 
        <IconQuote/>
        <Quote
        quoteRandom={quoteRandom}
        />
       <Author
       quoteRandom={quoteRandom}
       />
        <BtnQuote
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
        />
    </article>

  )
}
export default QuoteBox