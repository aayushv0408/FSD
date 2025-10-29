import React from 'react'
import './card.css'

function Card({ title, description }) {
  return (
    <div className="card">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmeengemc2%2Fcute-cartoon%2F&psig=AOvVaw2VZFfI6c3vQMUAZrqSW7W-&ust=1761795821311000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLD19IS_yJADFQAAAAAdAAAAABAz" alt="sample" height={200} width={100} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
