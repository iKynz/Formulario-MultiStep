// Componentes
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import UseForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import EndForm from './components/EndForm';

import './App.css';
import useForm from './hooks/useForm';

function App() {

  const useComponents = [<UseForm />, <ReviewForm />, <EndForm />];

  const { currentStep, currentComponent, setCurrentStep } = useForm(useComponents)

  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Agradecemos por comprar conosco, deixe uma avaliação do seu produto abaixo:</p>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form>
          <div className='inputs-container'>
            {currentComponent}
          </div>
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
