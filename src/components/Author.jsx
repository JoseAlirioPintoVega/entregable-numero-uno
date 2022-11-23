import React from 'react'

const Author = ({quoteRandom}) => {
  return (
    <h3 className='card__author'>
    {quoteRandom.author}
    </h3>
  )
}

export default Author