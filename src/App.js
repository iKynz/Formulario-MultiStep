// Componentes
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Agradecemos por comprar conosco, deixe uma avaliação do seu produto abaixo:</p>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form>
          <div className='inputs-container'></div>
          <div className='actions'>
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;