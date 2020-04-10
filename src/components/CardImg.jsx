import React from 'react'

function CardImg({url}) {
  if (url === '' || !url) return null;
  return (
    <img src={url} className="card-img-top" alt="..." />
  )
}

export default CardImg
