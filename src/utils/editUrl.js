const operationalSystem = window.require('os')

const operatingSystemUsername = operationalSystem.userInfo().username;

const editUrl = (folder)=>{
    console.log('edit')
    const regex = new RegExp(/\\/, 'g')
    let urlWithoutAgainstSlash = folder.replace(regex, "/") 
    const veryLargeUrl = folder.length >= 54 && folder.length < 63? true : false;
    const bigVeryLargeUrl = folder.length >= 63 && folder.length < 75? true : false;
    const extremelyLargeUrl = folder.length >= 76? true : false;
    const folderArray = folder.split(/\\/)
    let urlRegex;
    if(veryLargeUrl){
        urlRegex = new RegExp(`C:/Users/${operatingSystemUsername}/${folderArray[3]}`, 'g')
    }else{
        urlRegex = new RegExp(`C:/Users/${operatingSystemUsername}`, 'g')
    }
    if(bigVeryLargeUrl){
        urlRegex = new RegExp(`C:/Users/${operatingSystemUsername}/${folderArray[3]}/${folderArray[4]}`, 'g')
    }
    if(extremelyLargeUrl){
        urlRegex = new RegExp(`C:/Users/${operatingSystemUsername}/${folderArray[3]}/${folderArray[4]}/${folderArray[5]}/${folderArray[6]}/${folderArray[7]}`, 'g')
    }
    let editedUrl = urlWithoutAgainstSlash.replace(urlRegex, '...')
    return editedUrl;
}

module.exports = editUrl;