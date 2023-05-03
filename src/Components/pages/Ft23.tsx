import React from 'react'
import PropTypes from 'prop-types'
import ContentBlock from '../common/ContentBlock'
import '../common/ContentBlock.css'
import flunkyball_1 from "../assets/flunkyball_1.jpg"
import flunkyball_2 from "../assets/flunkyball_2.jpg"

const Ft23 = () => {

  const title = "Flunkyball Turnier des 1.TSVW";
  const body_1 = "Lust auf Spaß, Action und eine große Portion Wettkampfgeist? Dann sei dabei, wenn am 03. Juni 2023 das Flunkyballturnier des 1. Wiener Trinksportvereins startet! Die Teams treten in diesem spannenden Wettkampf gegeneinander an und werden alles geben, um als Sieger hervorzugehen. Doch nur eine Mannschaft kann am Ende mit dem begehrten Pokal triumphieren. Ob du bereits ein echter Flunkyball-Profi bist oder den Sport erst kennenlernen möchtest - bei diesem Turnier können alle gegeneinander antreten und sich in packenden Matches beweisen. Nutze diese Chance, um gemeinsam mit deinen Freunden einen Tag voller Spannung und feuchtfröhlicher Unterhaltung zu verbringen und gegen andere Teams anzutreten. Freue dich auf heiße Duelle, eine fantastische Stimmung und die beste Flunkyball-Party in Wien. Badesachen einpacken nicht vergessen, wir spielen auf der Donauinsel!";
  const body_2 = "Für Verpflegung und Getränke zum kleinen Preis an der Bar ist gesorgt! Zuschauer und Interessierte (und Spieler*innen, die nicht genug bekommen können) können sich in der Beer-Pong-Area und am Flunkydong-Funfeld matchen. Dem Sieger winkt ein Pokal, die ersten drei Team erhalten Medaillen in Gold, Silber und Bronze. Sei schnell und sichere dir noch heute deinen Startplatz für das Flunkyballturnier 2023. Wir freuen uns auf dich und dein Team und sind gespannt, wer am Ende als Sieger hervorgeht!";

  return (
    <div className="main">

      <div className="content-box">
        <div className="image-container">
          <img src={flunkyball_1} alt="Image" />
        </div>
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <div className="text">{body_1}</div>
        </div>
      </div>

      <div className="content-box">
        <div className="text-container">
          <h2 className="title">Facts:</h2>
          <div className="text">
            <ul>
              <li>Wann? 03.06.2023</li>
              <li>Startzeit: 13:00</li>
              <li>Wo? Donauinsel Wien, nähe Station Floridsdorfer Brücke</li>
              <li>Teamgröße 3-6 Spieler</li>
              <li>Teilnehmer: max. 16 Teams</li>
              <li>Startgeld: 6€ pro Person</li>
              <li>Mindestalter: 18 Jahre</li>
              <li>Spiele: 2-5 Spiele pro Team</li>
              <li>Spielgetränk: Ottakringer 0,5L</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-box">
        <div className="image-container">
          <img src={flunkyball_2} alt="Image" />
        </div>
        <div className="text-container">
          <div className="text">{body_2}</div>
        </div>
      </div>

      <div className="content-box">
        <a href="https://forms.gle/15PkScaGSd4zhEFE7" className="text-container registration-link">
          <h2 className="title registration-link">Anmelden!</h2>
        </a>
      </div>

    </div>
  )
}

Ft23.propTypes = {}

export default Ft23
