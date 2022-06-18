import logo from './logo.svg';
import './App.css';
import './MiComponente'
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundoooo
        </p>

        <MiComponente />
        
      </header>
    </div>
  );
}

export default App;
