
import './App.css';
import Joke from './props/Joke';



export default  function App() {
  return (
    <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
      <Joke
      setup=' Why did the scarecrow win an award?'
      punchline= 'Because he was outstanding in his field!'
      />
      <Joke
      setup='What do you get when you cross a snowman and a vampire?'
      punchline='Frostbite.'
      />
      <Joke
      setup='How does a penguin build its house?'
      punchline='Igloos it together!'
      />
      <Joke
      setup='Why dont scientists trust atoms?'
      punchline='Because they make up everything.'
      />
      <Joke
      setup='Did you hear about the mathematician whos afraid of negative numbers?'
      punchline='Hell stop at nothing to avoid them.'
      />
    </div>
  );
}

