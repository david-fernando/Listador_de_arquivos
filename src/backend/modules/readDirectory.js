const fileSystem = window.require("fs");

function readDirectory(url){
    return fileSystem.readdirSync(url)
}

export default readDirectory