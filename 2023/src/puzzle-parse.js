import fs from 'fs'

export default class puzzleParser {
    constructor(filePath) {
        this.filePath = filePath;
    }

async readFile (){
    return new Promise((resolve, reject) => {
        fs.readFile(this.filePath, 'utf-8', (err, data)=>{
            if (err){
                reject(err);
            }
            resolve(data);
        })
    })
    
}
}