// const args = process.argv.slice(2)
require('dotenv').config()
const Url = require('url-parse');
const Client = require('ssh2-sftp-client');
const sftp = new Client();

const testSite = new Url(`https://www.acgov.org/ece/`)
// https://acgovt.acgov.org/ece/
// https://acgovd.acgov.org/ece/

let directory

if(!testSite.hostname.match(/^alcoweb/) && process.env.NODE_ENV !== 'test') {
  directory = `${process.env.DEV_INTER}${testSite.pathname}`
}

const dev = process.env.DEV_SERVER
const test = process.env.TEST_SERVER

// let directories = []

// if(testSite) {
// }

// if(process.env.NODE_ENV === 'development') {
  
//   directories = [process.env.DEV_INTER, process.env.DEV_INTRA]
// }

const config = {
  
}



 sftp.connect({
  host: process.env.NODE_ENV !== 'test' ? dev : test,
  port: process.env.PORT,
  username: process.env.USER_NAME,
  password: process.env.SFTP_PASS
}).then(() => {
  return sftp.list(directory);
}).then(data => {
    const dirs = []
    const files = []
    data.forEach((item) => {
        switch(item.type) {
            case 'd':
                dirs.push(item)
              break;
            case 'l':
                files.push(item)
                break;
            case '-':
                files.push(item)
                break;
            default:
              console.log(`No item.type exists...`)
          }
    })

  printContents(files, 'name', '--FILE');
  printContents(dirs, 'name', '--DIRECTORY');

//   console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});

function printContents(array, property, message) {
  array.forEach((item) => {
      console.log(item[property], message)
  })
}