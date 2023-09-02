import './App.css';
import kiraPortrait from './assets/kira-portrait.png'
import Portrait from './components/Portrait'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Portrait src={kiraPortrait} alt="Kira Peters face" />
      <p>Hi! My name is Kira!</p>
    </div>
  );
}

export default App;
