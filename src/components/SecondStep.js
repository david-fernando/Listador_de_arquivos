import React from 'react';
import { Form } from 'semantic-ui-react';
import SelectFolder from './SelectFolder.js'
import 'semantic-ui-css/semantic.min.css'
import './form.css';

import handleChange from '../utils/handleChange'

function SecondStep({inputFileAlert, outputFileNameIsFilled}) {
  return (
    <Form>
      <SelectFolder itemName="outputPath" selectorText="Escolha onde salvar a lista" inputFileWasFilled={inputFileAlert} />
      <Form.Input className="outputFileName" error={!outputFileNameIsFilled? true: false} onChange={(event)=>handleChange().SetOutputFileName(event.target.value)} placeholder='Digite o nome da lista'/>
    </Form>  
  );
}

export default SecondStep;
