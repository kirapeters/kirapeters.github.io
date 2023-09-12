import './App.css';
import kiraPortrait from './assets/kira-portrait.png'
import Portrait from './components/Portrait'
import Header from './components/Header'
import FadeTextSlider from './components/FadeTextSlider'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Portrait src={kiraPortrait} alt="Kira Peters face"/>
        <FadeTextSlider slides={[{text: "Hi!"}, {text: "My name is Kira"}, {text: "Scroll down to learn a little about me!"}]} />
        <h1>Introduction</h1>
        <p>Hello! My name is Kira and I'm a software engineer. I earned my bachelor's degree in Software Engineering at BYU-Idaho in June 2021. I've worked at FamilySearch as a web developer and backend intern and done some projects on the side.</p>
        <p>When I'm not coding, you can find me practicing the piano or painting for fun!</p>
      </main>
    </div>
  );
}

export default App;
