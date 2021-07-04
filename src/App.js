import React from 'react'
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import TextMovieCard from './components/TextMovieCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp />
      <TextMovieCard flexDirection={'row'} heading={'Enjoy on your TV.'} description={'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'} videoURL={'/video-tv-in-0819.m4v'} />
      <TextMovieCard flexDirection={'row-reverse'} heading={'Enjoy on your TV.'} description={'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'} imgURL={'./images/mobile-00819.jpeg'} />
    </div>
  );
}

export default App;
