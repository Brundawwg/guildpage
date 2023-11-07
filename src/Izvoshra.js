import React from 'react'
import Yosh from './Resources/Images/supreme_leader.jpg'
import Gaz from './Resources/Images/luke.jpg'
import Dor from './Resources/Images/vader.jpg'
import Togon from './Resources/Images/kenobi.jpg'
import Odin from './Resources/Images/mando.jpg'

const Izvoshra = () => {
  return (
    <main>
      <div id='Izvoshra'>
        <h2>Meet The Izvoshra</h2>
      </div>
      <div className="team">
        <div className="members">
          <img src={Yosh} />
          Supreme Leader Yosh
          <ul>
            <li>Our Esteemed Leader</li>
            <li>Walking Wookiepedia</li>
          </ul>
        </div>
        <div className="members">
          <img src={Gaz} />
          Jedi Master Gazly
          <ul>
            <li>Strategy Expert</li>
            <li>Knows the Time Value of Money</li>
          </ul>
        </div>
        <div className="members">
          <img src={Dor} />
          Sith Lord Dor Brun
          <ul>
            <li>Lord of the Memes</li>
            <li>Tons of Advice--Some of it is Good</li>
          </ul>
        </div>
        <div className="members">
          <img src={Togon} />
          Master Togon the Elder
          <ul>
            <li>Disappears at Random</li>
            <li>May or May Not Actually Be an Elder</li>
          </ul>
        </div>
        <div className="members">
          <img src={Odin} />
          Odinson The Eternal
          <ul>
            <li>Aggravatingly Good Luck</li>
            <li>Was an Apostate--Bathed in the Waters of Mandalore--Has Been Redeemed</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Izvoshra