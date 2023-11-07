import React from 'react'
import GLs from './Resources/Images/gls.jpg' 
import Wat from './Resources/Images/wat.jpg'
import Fleets from './Resources/Images/executor.webp'
import Meta from './Resources/Images/cls.jpg'
import Memes from './Resources/Images/memes.jpg'
import { NavLink } from 'react-router-dom'

const Collection = () => {
  return (
    <main>
      <div id="collection">
        <h2>Group Goals</h2>
        <h3>What We Are Chasing Here At The Guild</h3>
      </div>
      <div className="collection">
        <div><img src={GLs} className='goals' />Galactic Legends</div>
        <div><img src={Wat} className='goals' />Wat and KAM Squads</div>
        <div><img src={Fleets} className='goals' />Super Fleets</div>
        <div><img src={Meta} className='goals' />Meta Teams</div>
        <div><img src={Memes} className='goals' />ALL The Memes</div>
      </div>
    </main>
  )
}

export default Collection