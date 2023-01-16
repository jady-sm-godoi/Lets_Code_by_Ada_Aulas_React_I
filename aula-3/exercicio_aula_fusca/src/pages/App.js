import fusca from '../assets/fusca-vermelho.png';
import './App.css';

function App({veiculo}) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="img-background">
          <img src={fusca} className="App-logo" alt="logo" />
        </div>
        <div className="conteudo">
          <h1>Novo {veiculo.modelo} 2023</h1>
          <p>também na cor <strong>{veiculo.cor}</strong></p>
          <small>{veiculo.placa}</small>
        </div>
      </header>
    </div>
  );
}

export default App;
