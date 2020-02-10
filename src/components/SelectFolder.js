import React, {useState} from 'react';
import './form.css';

import handleChange from '../utils/handleChange';


function SelectFolder({itemName, selectorText, inputFileWasFilled}) {
  const [folderSelectorText, setFolderSelectorText] = useState(selectorText);

  return (
    <>
      <label htmlFor="folderSelecter" className={!inputFileWasFilled? "folderSelecterError": "folderSelecter"}>{folderSelectorText}</label>
      <input
      type="file" 
      id="folderSelecter" 
      onChange={(event)=>{event.persist(); setFolderSelectorText(handleChange(event).GetFolder); handleChange(event).SetFolder(itemName)}}
      directory="true" 
      webkitdirectory="true"/>
     </>
  );
}

export default SelectFolder