import propTypes from 'prop-types';
import React from 'react'

export const Cards = ({title, url}) => {
  return (
    <div className='card'>
       <img src={url} alt={title} />
       <p>{title}</p>
    </div>
  )
}

Cards.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired
} 