import React from 'react'

const Quote = ({quoteRandom}) => {
  return (
    <p className='card__quote'>
            {quoteRandom.quote}
        </p>
  )
}

export default Quote