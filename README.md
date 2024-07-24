# Gestão Arca

## Descrição

A aplicação **Gestão Arca** foi criada para o controle de presença de adolescentes em eventos da igreja. A ferramenta permite o gerenciamento de adolescentes já cadastrados e a adição de visitantes para controle de presença. 

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Express**: Framework para construção de APIs em Node.js.
- **Mongoose**: Biblioteca para modelagem de dados MongoDB em Node.js.
- **MongoDB Atlas**: Serviço de banco de dados MongoDB na nuvem.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Git**: Controle de versão do código.

## Instalação

Para instalar e configurar a aplicação localmente, siga os passos abaixo:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/andreacmdev/gestaoarca.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd gestaoarca
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:**

    ```plaintext
    DB_HOST=SEU_CLUSTER.mongodb.net
    DB_USER=SEU_USUARIO
    DB_PASSWORD=SUA_SENHA
    DB_DATABASE=dbarca
    ```

5. **Inicie o servidor:**

    ```bash
    npm start
    ```

## Uso

- **Cadastrar Adolescentes**: Os dados dos adolescentes serão carregados a partir de um arquivo de configuração.
- **Adicionar Visitantes**: Via requisição POST, você pode adicionar visitantes ao banco de dados.

## Contribuição

Se você deseja contribuir para o desenvolvimento da aplicação, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto é licenciado sob a Licença ISC - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
