function filterFilenames(fileType, files){
    let filteredFilenames;
    return files[0].reduce((filteredNames, index)=>{
       return filteredFilenames = files[0].filter(item => (new RegExp(fileType.toLowerCase())).test(item))
    })
}

export default filterFilenames;