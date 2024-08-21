import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ColouredMangaPage.css'

const ColouredMangaPage = () => {
  return (
    <div className='background fade-in'>
      <Navbar> </Navbar>
      <h1 className='h1-class'>Discussions</h1>
      <ul className='ul-class'>
        <li className='li-class'><a href="https://wayexit995.github.io/CSM/Manga/Index.html">Link to Chainsaw Man</a></li>
      </ul>
    </div>
  );
}

export default ColouredMangaPage;
