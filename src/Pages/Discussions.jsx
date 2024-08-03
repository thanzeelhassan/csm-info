import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import WallBackground from "../Components/WallBackground/WallBackground"
import './Discussions.css'

const Discussions = () => {
  return (
    <div>
      <WallBackground heroCount={1}/>
      <Navbar> </Navbar>
      <h1 className='h1-class'>Discussions</h1>

      <h2 className='h1-class'>r/ChainsawMan</h2>
      
      <ul className='ul-class'>
        <li className='li-class'><a href="https://www.reddit.com/r/ChainsawMan/comments/a2o6uw/disc_chainsawman_ch_1/" className='a-class'>Chapter 1</a></li>
        <li className='li-class'><a href="https://www.reddit.com/r/ChainsawMan/comments/a4utu9/disc_chainsawman_ch_2/" className='a-class'>Chapter 2</a></li>
        <li className='li-class'><a href="https://www.reddit.com/r/ChainsawMan/comments/abazic/disc_chainsawman_ch_5/" className='a-class'>Chapter 5</a></li>
      </ul>
    </div>
  );
}

export default Discussions;
