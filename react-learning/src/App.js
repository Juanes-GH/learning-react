import React, {useEffects, useState} from 'react';
import './App.css';

const GIFS = [
  'https://media2.giphy.com/media/l3vQXKKENvuCjz5vi/200w.webp?cid=ecf05e47crn94x4zkijgajrk71mshrxfee0twkq04anqbc1b&rid=200w.webp&ct=g', 
  'https://media2.giphy.com/media/l3vR33TV0vszF7rWg/200w.webp?cid=ecf05e47crn94x4zkijgajrk71mshrxfee0twkq04anqbc1b&rid=200w.webp&ct=giphy.gif'
]

const DIFFERENT_GIFS= [
  'https://media3.giphy.com/media/Fi5ZsSlN0Wt9e/giphy.webp?cid=ecf05e47yk9hybm7s4f4lru60isl50zo8rq7uc9eusm20ocj&rid=giphy.webp&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffects(()=>{
    
  })

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
