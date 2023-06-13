import React, { useState } from 'react'
import styles from './styles.module.css'
import Popup from '../mainComponents/popup'
import '../mainComponents/popup/popup.css'

function SongCard(props) {

const [showPopup,setShowPopup] = useState(false)

const togglePopup = ()=>{
    setShowPopup(!showPopup)
}


  return (
    <div className={styles.songcard}>
   {/* <h4>Title:</h4> {props.title}
  <h4>Duration:</h4>  {props.duration} */}
<img className={styles.thumbnail} src={props.video.thumbnail.url} alt="" />
  Title: {props.video.title}
  <br />
  Duration: {props.video.duration_formatted}


  <button onClick={togglePopup}>Play</button>
  
  <Popup show = {showPopup}  onClose={togglePopup}>
    <div className={styles.embed}>
    <h4>Title: {props.video.title}</h4>
    <h4>Views: {props.video.views.toLocaleString()}</h4>

    
  

    <iframe
  width="560"
  height="315"
  src={`https://www.youtube.com/embed/${props.video.id}`}
  allowFullScreen
></iframe>
    </div>
<div className={styles.popup_buttons}>
    <button>Add to Playlist</button>
    <button>Add to Favorites</button>
    </div>
  </Popup>
    
    </div>
  )
}

export default SongCard