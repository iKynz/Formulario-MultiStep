// Componentes
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UseForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import EndForm from './components/EndForm';
import Steps from './components/Steps/Steps';

// Hook
import useForm from './hooks/useForm';

import './App.css';

function App() {

  const useComponents = [<UseForm />, <ReviewForm />, <EndForm />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(useComponents)

  return (
    <div className="App">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Agradecemos por comprar conosco, deixe uma avaliação do seu produto abaixo:</p>
      </div>
      <div className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>
            {currentComponent}
          </div>
          <div className='actions'>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
