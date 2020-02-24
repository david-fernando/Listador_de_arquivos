import removeFileName from './removeFileName'
const editUrl = require('./editUrl.js');

function getFolder(event){
    let files = event.target.files;
    let fileName
    let folder
    let emptyFolder;
    try {
        fileName = files[0].name
        folder = files[0].path        
    } catch (error) {
        emptyFolder = true;
    }
    folder = removeFileName(fileName, folder)
    return {
        "unchanged_url": folder,
        Edited_url(){
            if(emptyFolder || fileName === "desktop.ini"){
                return "A pasta selecionada está vazia, por favor escolha outra.";
            }else{
                return folder.length > 50? editUrl(folder, fileName): folder
            }
            }
    }
}

export default getFolder;