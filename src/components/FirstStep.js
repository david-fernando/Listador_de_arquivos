import React from 'react';
import { Form } from 'semantic-ui-react';
import SelectFolder from './SelectFolder.js'
import 'semantic-ui-css/semantic.min.css'
import './form.css';

import handleChange from '../utils/handleChange'
import fileTypeOptions from '../utils/fileTypeOptions.js'

function FirstStep({selectedOption, inputFileAlert}) {

  return (
    <Form>
      <SelectFolder itemName="inputFolder" selectorText="Selecione uma pasta" inputFileWasFilled={inputFileAlert} />
      <Form.Select className="select-folder" error={!selectedOption? true: false} onChange={(event, {value})=>handleChange(event).SetFileType(value)} options={fileTypeOptions} placeholder="Tipo de arquivo"/>
    </Form>  
  );
}

export default FirstStep;
