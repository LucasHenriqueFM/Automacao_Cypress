## Como Executar

Para executar a automação, é necessário realizar algumas instalações e configurações.

### Instalações

Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a versão atual do Node.js digitando `node -v` no terminal. Em seguida, siga as instruções abaixo:

- Abra o terminal na pasta do projeto e execute os seguintes comandos:
  - Cypress: `npm install cypress --save-dev`
  - Cucumber: `npm install cypress-cucumber-preprocessor --save-dev`
  - Java JDK

### Configurações

- Configure as variáveis de ambiente:
  - Java JDK: Defina o caminho de instalação do seu Java, por exemplo: `C:\Program Files\Java\jdk1.8.0_351\bin`

**Observação**: Caso queira acompanhar um passo a passo de como instalar e configurar o Cypress e o Cucumber, [clique aqui](https://apricot-myth-659.notion.site/Prepara-o-do-Ambiente-0417187caa4941e2a74ce1c9af1b1260?pvs=4) para acessar o tutorial.

### Execução

Depois de ter instalado e configurado, execute o comando `npm test run` para abrir uma página com os testes de integração. Dentro dessa pasta, você encontrará a automação de API e a automação WEB.