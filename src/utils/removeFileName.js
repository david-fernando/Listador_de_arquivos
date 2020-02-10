function removeFileName(fileName, folder){
    let pathWithoutFileName;
    try {
        if(folder.includes(fileName)){
            pathWithoutFileName = folder.replace(fileName, "");
        }        
    } catch (error) {
        pathWithoutFileName = null
    }
    return pathWithoutFileName;
}

export default removeFileName;