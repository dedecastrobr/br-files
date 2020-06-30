# br-files

Esse script copia os arquivos de uma local pra outro. E somente isso.
Você precisa de um computador com git e NodeJS instalados. 

### Aqui você encontra informações de como instalar o git em uma máquina com Windows 10.
    https://woliveiras.com.br/posts/instalando-o-git-windows/

### Aqui você encontra a última versão do NodeJS para Windows. Baixar e instalar, sem mistério.
    https://nodejs.org/en/download/

Depois do download e instalação, caso não ocorra problemas, abra o prompt de comando e digite:

```
    node -v
```
Você deve ver algo assim (a versão pode variar, mas deve aparecer):
```
    v11.12.0
```

Agora que você tem as ferramentas necessárias, para utilizar o script:


Vá até o diretório onde você pretende baixar o script e rode:
```
git clone https://github.com/dedecastrobr/br-files.git
```
Uma pasta (br-files) automaticamente será criada. Entre nela ("cd br-files")e digite:
```
npm install
```
Isso vai instalar as libs que o script usa.

Se você ja tem a pasta br-files, pode só atualizar os fontes executando:
```
git pull
```
Ao final da atualização rode novemante o npm install para garantir ter todas as libs necessárias:
```
npm install
```


Para rodar o script você tem duas opções de comandos:

### SYNC-ALL
```
node br-files.js SYNC-ALL <PASTA DE ORIGEM> <PASTA DE DESTINO>
```

Isso vai copiar TODOS os arquivos da pasta de origem para a pasta de destino. Caso a pasta de destino não exista, ela é criada. Arquivos já existentes **SERÃO SOBREESCRITOS**. 

Se tudo correr bem, você deve ver algo assim:
```
node br-files.js sync-all test_files teste
Arquivos copiados com sucesso!
```

### SYNC-MONTH
```
node br-files.js SYNC-MONTH <PASTA DE ORIGEM> <PASTA DE DESTINO>
```

Isso vai copiar os arquivos de log do MES CORRENTE da pasta de origem para a pasta de destino. Além disso, vai programar para executar a mesma todo os dia primeiro de cada mês. 

Se tudo correr bem, você deve ver algo assim:
```
node br-files.js sync-month test_files/ teste/
Atualizando arquivos do mês
Arquivo log202007.log copiado com sucesso!
Arquivo log202007_002.log copiado com sucesso!
Arquivo log202007_001.log copiado com sucesso!
Programando execução mensal
Tudo pronto! Nos vemos no próximo dia 01! ;) 
```


Recomenda-se deixar a execução do comando de atualização mensal na inicialização da máquina. Em caso de queda de energia, quando a máquina subir novamente, vai rodar uma vez, atualizando os arquivos e programar para rodar no próximo dia 01. 