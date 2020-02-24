import React, {useState, useEffect} from 'react';
import { Button, Segment } from 'semantic-ui-react';
import StepIndicator from './components/StepIndicator'
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import backend from './backend/backend'

import returnIfTheFormIsCompleted from './utils/returnIfTheFormIscCompleted'
import goNextScreen from './utils/goNextScreen'
import stateFeedback from './utils/stateFeedback'

function App() {
  const [step, setStep] = useState('First');
  const [selectOptionNotSelected, setSelectOptionNotSelected] = useState(true);
  const [inputFileWasFilled, setInputFileWasFilled] = useState(true);
  const [outputFileNameWasFilled, setOutputFileNameWasFilled] = useState(false);
  const [outputFilePathWasFilled, setOutputFilePathWasFilled] = useState(true);
  const [feedback, setFeedback] = useState(null);

  useEffect(()=>{
    setInputFileWasFilled(true)
  }, [step])

  function setTheFillingofTheForm(){
    setSelectOptionNotSelected(returnIfTheFormIsCompleted().ReturnIfOptionWasSelected());
    setInputFileWasFilled(returnIfTheFormIsCompleted().ReturnIfInputFileWasFilled())
    setOutputFileNameWasFilled(returnIfTheFormIsCompleted().ReturnOutputFileNameWasFilled())
    setOutputFilePathWasFilled(returnIfTheFormIsCompleted().ReturnIfOutputFilePathWasFilled())
  }

  function goNextStep(){
    setStep(goNextScreen())
  }

  return (
    <>
    <StepIndicator step={step} />
    <Segment attached>
      <ul>
        <li>
          {step === 'First'?
           <FirstStep selectedOption={selectOptionNotSelected} inputFileAlert={inputFileWasFilled} />:
           <SecondStep inputFileAlert={outputFilePathWasFilled} outputFileNameIsFilled={outputFileNameWasFilled} />
           }
        </li>
        <li className="buttons">
          {step === 'Second'?
            <Button
             content='Anterior' 
             icon='left arrow' 
             onClick={()=>setStep('First')} 
             labelPosition='left' />:
            null
          }
          {step === 'First'?
            <Button
             content='Próximo' 
             positive icon='right arrow' 
             onClick={()=>{setTheFillingofTheForm(); goNextStep()}} 
             labelPosition='right' />:
            <Button
             content={feedback === null? "Fazer lista": feedback} 
             positive icon='right arrow' 
             onClick={async()=>{await setTheFillingofTheForm(); backend(); setFeedback(stateFeedback().GetFeedback())}} 
             labelPosition='right' />
          }
        </li>
      </ul>
    </Segment>
    </>
  );
}

export default App;
