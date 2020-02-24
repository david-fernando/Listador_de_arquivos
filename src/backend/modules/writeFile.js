const fileSystem  = window.require("fs");

async function writeFile(outputFilePath, outputFileName, files){
    const arrayOfFiles = []
    files[0].map((FileList, index)=>{arrayOfFiles.push(`${files[0][index]}\n`)})
    return fileSystem.writeFileSync(`${outputFilePath}/${outputFileName}.txt`, arrayOfFiles, {enconding: 'utf-8'})
}

export default writeFile;