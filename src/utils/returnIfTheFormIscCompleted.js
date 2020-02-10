function returnIfTheFormIsCompleted(){
    return {
        ReturnIfOptionWasSelected(){
            return localStorage.getItem("file_type") ? true: false
        },
        ReturnIfInputFileWasFilled(){
            return localStorage.getItem("inputFolder") ? true: false
        },
        ReturnIfOutputFilePathWasFilled(){
            return localStorage.getItem("outputPath") ? true: false;
        },
        ReturnOutputFileNameWasFilled(){
            return localStorage.getItem("outputFileName") && localStorage.getItem("outputFileName").length > 0 ? true: false;
        }
    }
}

export default returnIfTheFormIsCompleted;