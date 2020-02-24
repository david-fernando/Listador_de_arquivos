const formData = {
    folderPath: localStorage.getItem("inputFolder"),
    fileType: localStorage.getItem("file_type"),
    outputFileName: localStorage.getItem("outputFileName"),
    outputFilePath: localStorage.getItem("outputPath")
}

export default formData;