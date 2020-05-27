const fs = require('fs-extra');  

let sourceFile = process.argv[2]
let destinationFile = process.argv[3]

fs.copy(sourceFile, destinationFile)  
.then(() => {
    console.log('Arquivos copiados com sucesso!')
})  
.catch((err) => {
    console.error('Erro copiando arquivos:\n', err.message)    
}
);