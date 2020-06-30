const fs = require("fs-extra")  

brFiles(process.argv[2], process.argv[3], process.argv[4])

async function brFiles(command, source, destination) { 
    switch (command.toUpperCase()) {
        case "SYNC-ALL":
            syncFolders(source, destination)        
            break;
        case "SYNC-MONTH":
        await syncMonthly(source, destination)
        .then(() =>{
            console.log("Programando execução mensal")
            setInterval(() => {
                if (new Date().getDate() == 1) {
                    syncMonthly(source, destination)
                }
            }, 86400);
            console.log("Tudo pronto! Nos vemos no próximo dia 01! ;)")
        })
        .catch(error => {
            console.log("Problemas com a atualização. Favor verificar: \n" + error)
        })
            break;
        default:
            console.log("Comando inválido. Favor verificar.")
            break;
    }   
}

async function syncMonthly(sourceFolder, destinationFolder) {
    console.log("Atualizando arquivos do mês")
        let date = new Date();
        date.setMonth(date.getMonth() - 1)
        let filePrefix = "log"+date.getFullYear()+("0"+(date.getMonth()+1)).slice(-2)
        let files = fs.readdirSync(sourceFolder).filter(fn => fn.startsWith(filePrefix))
        return await Promise.all(files.map(async (fn) => {
            await fs.copy(sourceFolder+"/"+fn, destinationFolder+"/"+fn)  
            .then(() => {
                console.log("Arquivo " + fn +" copiado com sucesso!")
            })  
            .catch((err) => {
                console.error("Erro copiando arquivos:\n", err.message)
                reject()    
            }
            )
        }))
}

async function syncFolders(sourceFolder, destinationFolder) {
    await fs.copy(sourceFolder, destinationFolder)  
    .then(() => {
        console.log("Arquivos copiados com sucesso!")
    })  
    .catch((err) => {
        console.error("Erro copiando arquivos:\n", err.message)    
    }
    );    
}