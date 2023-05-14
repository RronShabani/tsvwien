import React from 'react'
import PropTypes from 'prop-types'
import ContentBlock from '../common/ContentBlock'
import { Link } from 'react-router-dom';
import '../common/ContentBlock.css'
import wer_img from "../assets/wer_img.jpg"

const Events = () => {

  const termine = "Termine 2023";
  const flunky_title = "Flunkyball Turnier des 1.TSVW";
  const flunky_body = "3. Juni 2023 Die Vorbereitungen für das Flunkyball-Turnier im Juni laufen auf Hochtouren. So viel lässt sich schon mal sagen: Es wird leiwand! Wir starten mit dem Turnier um 13:00, maximal 16 Mannschaften in der Größe von 3 bis 6 Personen sind zugelassen. Für Getränke und Snacks wird gesorgt. Wir freuen uns über viele Teilnehmer! Nähere Infos findest du ";

  return (
    <div className="main">
      <div className="content-box">
        <div className="text-container">
          <h2 className="title">{termine}</h2>
          <div className="text">
              jeder 1. Donnerstag im Monat: Stammtisch ab 18:00<br /><br />
              3. Juni: Flunkyball-Turnier, Donauinsel Wien, Start 13:00<br /><br />
              16. September: Weinwandertag<br /><br />
              TBA: Silent Drinking – Vortrag & Workshop<br /><br />
          </div>
        </div>
      </div>

      <div className="content-box">
        <div className="text-container">
          <h2 className="title">{flunky_title}</h2>
          <p className="text">
            {flunky_body}
            <Link className="text" to="/ft23">hier</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

Events.propTypes = {}

export default Events
