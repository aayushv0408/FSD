import React from 'react'
import './card.css'

function Card({ title, description }) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/200x100" alt="sample" height={200} width={100} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
