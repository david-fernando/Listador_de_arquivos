import getFolder from './getFolder';

function handleChange(event){
    return {
      SetFileType(value){
        if(value !== 'default' && value !== 'undefined'){
          localStorage.setItem("file_type", value)
        }
      },
      GetFolder(){
        return getFolder(event).Edited_url()
      },
      SetFolder(itemName){
        let value = getFolder(event).unchanged_url;
        localStorage.setItem(itemName, value)
      },
      SetOutputFileName(value){
        localStorage.setItem("outputFileName", value)
      }
    }
}

export default handleChange;