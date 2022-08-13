const fs = require('fs');

function save (data){
    const dataString = JSON.stringify(data);
    return fs.writeFileSync('./data.json', dataString);
}

function load (){
    const fileBuffer = fs.readFileSync('./data.json', 'utf-8');
    const data = JSON.parse(fileBuffer);
    return data;
}

module.exports = { save, load }