import React from 'react'
import './Stat.css'

const Stat = ({children, stat}) => {
  return (
    <section className='stat'>
      <div className='title'>{stat}</div>
      <input className='val' type='number' placeholder={children}/>
    </section>
  )
}

export default Stat