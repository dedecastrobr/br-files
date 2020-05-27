# br-files

Esse script copia os arquivos de uma local pra outro. E somente isso.
Você precisa de um computador com git e NodeJS instalados. 

### Aqui você encontra informações de como instalar o git em uma máquina com Windows 10.
    https://woliveiras.com.br/posts/instalando-o-git-windows/

### Aqui você encontra a última versão do NodeJS para Windows. Baixar e instalar, sem mistério.
    https://nodejs.org/en/download/

Depois do download e instalação, caso não ocorra problemas, abra o prompt de comando e digite:

```bash
    node -v
```
Você deve ver algo assim (a versão pode variar, mas deve aparecer):
```bash
    v11.12.0
```

Agora que você tem as ferramentas necessárias, para utilizar o script:

* Vá até o diretório onde você pretende baixar o script e rode:
```bash
git pull https://github.com/dedecastrobr/br-files.git
```
* Uma pasta (br-files) automaticamente será criada. Entre nela e digite:
```bash
npm install
```
* Isso instalar as libs que o script usa


Pronto, agora o script está pronto para uso.
* Para rodar o script apenas execute, por exemplo:
```bash
node br-files.js arquivoDeOrigem.txt arquivoDeDestino.txt
```

Se tudo correr bem, você deve ver algo assim:
```bash
    br-files git:(master) ✗ node br-files.js arquivoDeOrigem.txt arquivoDeDestino.txt
    Arquivos copiados com sucesso!
```

Se você errar o caminho ou o nome dos arquivos pode ver algo como: 
```bash
    br-files git:(master) ✗ node br-files.js arquivoErrado.txt arquivoDeDestino.txt
    Erro copiando arquivos:
    ENOENT: no such file or directory, stat 'arquivoErrado.txt'
 ```