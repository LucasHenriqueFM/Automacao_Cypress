Como executar:
    Para executar a automação, é necessário fazer algumas instalações e configurações.

Instalações:
    • Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a versão atual do Node.js digitando "node -v" no terminal.
    Com a pasta do projeto aberta em algum diretório, abra o terminal na pasta e instale os seguintes programas utilizando os códigos abaixo:
        • Cypress: npm install cypress --save-dev
        • Cucumber: npm install cypress-cucumber-preprocessor --save-dev
    • Java JDK


Configurações:
    • Configurar as variáveis de ambiente:
        •Java JDK: direcione o caminho de instalação do seu Java, por exemplo: C:\Program Files\Java\jdk1.8.0_351\bin


Execução:
    •Depois de ter instalado e configurado, execute o seguinte comando no terminal: "npm test run". Isso abrirá o Cypress. Com o Cypress aberto, execute o arquivo Rest-API.feature dentro da pasta Web.