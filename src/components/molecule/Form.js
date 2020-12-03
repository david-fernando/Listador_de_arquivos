import { useState } from 'react'
import SelectFolder from '../atom/SelectFolder'
import Button from '../atom/Button'
import Main from '../atom/Main'

const { ipcRenderer } = window.require('electron')

function Form() {
  const [textFolder, setTextFolder] = useState('Selecione uma pasta');

  function openFolder(){
    ipcRenderer.send('open-folder', 'true')
    ipcRenderer.on('directory', (event, directory)=>{
      if(directory !== undefined ) return setTextFolder(directory)
    })
  }

  return (
      <Main>
        <SelectFolder onClick={()=>{ openFolder()}} error={false} >{textFolder}</SelectFolder>
        <Button>Seguinte</Button>
      </Main>
  );
}

export default Form;