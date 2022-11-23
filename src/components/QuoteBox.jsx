import React from 'react'
import BtnQuote from './BtnQuote'


const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {
  
  const objStyle = {
    color: colorRandom
  }
  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (
  
    <article className='card' style={objStyle}> 
         <div className='card__icon'>
         <i class="fa-solid fa-quote-left"></i>
        </div> 
        <p className='card__quote'>
            {quoteRandom.quote}
        </p>
        <h3 className='card__author'>
            {quoteRandom.author}
        </h3>
        <BtnQuote
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
        />
    </article>

  )
}
export default QuoteBox