import React from 'react'
import './CreatureCard.css'
import Stat from './Stat'
import Point from './Point'
import icon from '../assets/icon.png'

const CreatureCard = () => {
  return (
    <section className='creature-card'>
      <div className='name'>
        <img src={icon}/>
        <div>
          <p>//NAME</p>
          <input type='text'></input>
        </div>
      </div>
      <br/>
      <div className='taxa'>
        <div>
          <p>//TAXA.</p>
          <input type='text'></input>
        </div>
      </div>
      <section className='stats'>
        <Stat stat={"CMB"}>23</Stat>
        <Stat stat={"INS"}>23</Stat>
        <Stat stat={"WND"}>23</Stat> 
        <Stat stat={"ARMR"}>23</Stat> 
        <section className='mobility'>
          <div className='yes'>SESSILE</div>
          <div id='or'>or</div>
          <div className='no'>MOTILE</div>
        </section>
      </section>
      <section className='tags'>
        <div className='sec-title'>TAGS</div>
        <input type='text'/>
        <input type='text'/>
      </section>
      <section className='loc'>
        <div className='sec-title'>LOC</div>
        <input type='text'/>
      </section>
      <section className='datapoints'>
        <div className='sec-title'>DATAPOINTS</div>
        <Point>01</Point>          
        <Point>02</Point>          
        <Point>03</Point>          
      </section>
      <section className='notes'>
        <div className='sec-title'>NOTES</div>
        <input type='text'/>
      </section>
    </section>

  )
}

export default CreatureCard