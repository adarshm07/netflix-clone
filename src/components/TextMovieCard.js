import React, { useState, useEffect } from 'react'

const TextMovieCard = ({flexDirection, heading, description, videoURL, imgURL}) => {

    const [url, setUrl] = useState();
    
    useEffect(() => {
      if (videoURL) {
        setUrl(videoURL);
      } else {
        setUrl(imgURL);
      }
    }, []);

    // console.log(url);    

    return (
        <div className="textmovie-card container" style={{flexDirection: flexDirection}}>
            <div className="col-one">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>

            <div className="col-two">
                { videoURL ? <video autoPlay playsInline muted loop> <source src={url} type="video/mp4" /> </video> : <img src={url} alt="" /> }
            </div>
        </div>
    )
}

export default TextMovieCard;