// import React from 'react'
// import PropTypes from 'prop-types'
// import ContentBlock from '../common/ContentBlock'
import '../common/ContentBlock.css'
import about_img from "../assets/about_img.jpg"
import about_img_2 from "../assets/about_img_2.jpg"

const about_title = "Wer Sind Wir?";
const about_body = "Vor zwei Jahren fanden sich zwei Freunde bei einem (oder vielleicht auch mehr) Bier wieder, tranken, diskutierten – und stellten fest, dass der Trinksport in der österreichischen Sportlandschaft nicht den Stellenwert bekommt, den er bekommen sollte. Gedacht, getan – ein Verein wurde gegründet, um das zu ändern.\nMittlerweile sind aus den zwei Freunden mehr geworden, der 1. Wiener Trinksportverein wächst und wächst und besteht aus einer kleinen Truppe, die sich einem Ziel verschrieben hat: Make Trinksport great again!";

const about_title_2 = "Was machen wir?";
const about_body_2 = "Der 1. Wiener Trinksportverein hat sich der Förderung des Trinksport und der Trinkkultur verschrieben. Dazu veranstalten wir Turniere, treffen uns zum regelmäßigen Stammtisch, organisieren Events, um die Trinkkultur zu erhalten, und halten Fortbildungen und Seminare ab. Und wir trainieren natürlich auch, um unsere trinksportlichen Fähigkeiten bei Wettkämpfen mit anderen zu messen. 😉";


const Home = () => {
  return (
    <div className="main">
      <div className="content-box">
        <div className="image-container">
          <img src={about_img} alt="Image" />
        </div>
        <div className="text-container">
          <h2 className="title">{about_title}</h2>
          <p className="text">{about_body}</p>
        </div>
      </div>

      <div className="content-box">
        <div className="image-container">
          <img src={about_img} alt="Image" />
        </div>
        <div className="text-container">
          <h2 className="title">{about_title_2}</h2>
          <p className="text">{about_body_2}</p>
        </div>
      </div>

      <div className="content-box">
        <div className="image-container">
          <img src={about_img_2} alt="Image" />
        </div>
        <div className="text-container">
          <h2 className="title">{about_title_2}</h2>
          <p className="text">{about_body_2}</p>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
