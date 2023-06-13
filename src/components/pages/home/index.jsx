import React, { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "../../songCard";
import styles from './styles.module.css'

function Home() {

  const defValue = 'Popular Songs'
  const [search,setSearch] = useState(defValue)

  const [videos, setVideos] = useState([]);

  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: {
      query: search,
      safesearch: "false",
    },
    headers: {
      "X-RapidAPI-Key": "7235af08d0mshee60bcc31e8760dp10f37djsnbf96f9610f72",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((result) => {
        setVideos(result.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(videos);

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const handleSubmit = async (e)=>{
    if (search.length>0){
    e.preventDefault()
    await axios.request(options)
      .then((result) => {
        setVideos(result.data.results);
      })
      .catch((error) => console.log(error));
    }
    else {setSearch(defValue)}
  }

  return <div className={styles.home}>

     <form>
      <input onChange={handleChange} type="search" placeholder="Search for your favorite artist" />
      <button onClick={handleSubmit}>Search</button>
    </form>
      

      <h2>Showing songs from {search}</h2>
 
<div className={styles.video_container}>
  {videos.map((video)=>{
    // return <SongCard title = {video.title} duration = {video.duration_formatted}/>
    return <SongCard video = {video}/>
  })}
</div>
  </div>;
}

export default Home;