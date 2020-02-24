const log = window.require('error-log-file')

async function writeLog(errorMessenger){
    let date = new Date();
    await log(errorMessenger, {fileName: `./log/errorlog(${date.Date()}-${date.getMonth}-${date.getFullYear()}[${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}]).txt`})
}

export default writeLog;