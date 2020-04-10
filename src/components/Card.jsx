import React from 'react'
import CardImg from './CardImg'

function Card(props) {
  return (
    <div className="card">
      <CardImg url={props.imgUrl} /> 
      <div className="card-body">
        {props.children}
      </div>
      <button className="btn btn-primary">Go somewhere</button>
    </div>
  )
}

export default Card
