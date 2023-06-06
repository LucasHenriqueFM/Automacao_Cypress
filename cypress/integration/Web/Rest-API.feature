Feature: Tests Web

    Automação de teste 2E2 WEB

    @E2E
    Scenario: Navegar pelo site Restful API
        Given que estou dentro do site "restful api"
        When clicar no botão "Privacy Plicy"
        And clicar no botão "Contact"
        Then deve entrar na pagina de Contato
