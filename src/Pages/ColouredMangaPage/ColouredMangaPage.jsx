import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './ColouredMangaPage.css';
import chainsawman_image2 from '../../assets/1296717_800px.jpg';
import firepunch_image from '../../assets/firepunch1.jpg';

const ColouredMangaPage = () => {
  return (
    <div className='background fade-in'>
      <Navbar />
      <div className='image-container'>
        <div className='image-wrapper'>
          <p className='image-text'>Chainsaw Man</p>
          <a href="https://wayexit995.github.io/CSM/Manga/Index.html">
            <img src={chainsawman_image2} alt="Chainsaw Man" className='image-class'/>
          </a>
        </div>
        <div className='image-wrapper'>
          <p className='image-text'>Fire Punch</p>
          <a href="https://wayexit995.github.io/Fire_Punch/">
            <img src={firepunch_image} alt="Fire Punch" className='image-class'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ColouredMangaPage;
