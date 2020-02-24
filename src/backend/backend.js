import getData from './modules/getFormData'
import readDirectory from './modules/readDirectory'
import filterFileNames from './modules/filterFileNames'
import writeFile from './modules/writeFile'
import stateFeedback from '../utils/stateFeedback'
import writeLog from './modules/writeLog'

function backend(){
    let files = []
    let filteredFileNames = []

    files.push(readDirectory(getData.folderPath))
    filteredFileNames.push(filterFileNames(getData.fileType, files))
    const save = (async ()=>{
        try {
            writeFile(getData.outputFilePath, getData.outputFileName, filteredFileNames);
            stateFeedback().SetFeedback("Pronto!")
            setTimeout(()=>{localStorage.clear()}, 1000)
        } catch (error) {
            await writeLog(error);
        }
    })();
}

export default backend;