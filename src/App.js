import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

const App = () => {
  let heroData = [
    {text1:"CSM", text2:"Info"},
    {text1:"CSM", text2:"Info"},
    {text1:"CSM", text2:"Info"},
    {text1:"CSM", text2:"Info"},
    {text1:"CSM", text2:"Info"}
  ] 
  const [heroCount, setHeroCount] = useState(0);

  useEffect(()=> {
    setInterval(()=> {
      setHeroCount((count)=> {return count===4?0:count+1})
    }, 5000);
  },[])

  return (
    <div>
      <Background heroCount={heroCount}/>
      <Navbar/>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  )
}

export default App