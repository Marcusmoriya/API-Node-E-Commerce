🛍️ API de E-commerce com Node.js (Curso balta.io)
Este é um projeto de API de E-commerce desenvolvido com base no código-fonte do curso "Criando APIs com Node.js" (balta.io - Curso 1972). O objetivo é demonstrar a construção de um backend completo e robusto, aplicando os principais conceitos de desenvolvimento de APIs RESTful utilizando o ecossistema JavaScript.

Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias e ferramentas, conforme ensinado no curso:
Backend:	Node.js	Ambiente de execução JavaScript.
Framework Web:	Express	Criação das rotas e manipulação de requisições.
Banco de Dados:	MongoDB	Banco de dados NoSQL de alto desempenho.
ODM (Object Data Modeling):	Mongoose	Manipulação e modelagem de dados no MongoDB.
Autenticação:	JWT (JSON Web Tokens)	Geração e validação de tokens de acesso.
Segurança:	bcrypt	Encriptação de senhas de usuário.
Desenvolvimento:	Nodemon	Monitoramento e reinício automático do servidor durante o desenvolvimento.

Estrutura do Projeto e Funcionalidades
A aplicação segue uma estrutura modular, utilizando o padrão de design Repository e separação em Models, Controllers e Routes.

Funcionalidades Principais
Esta API fornece os seguintes endpoints e funcionalidades essenciais para um e-commerce:

Autenticação e Autorização:

Registro de novos usuários (Customer).

Login, geração de JWT e Refresh Token.

Autorização baseada em roles (Admin/User).

Gestão de Produtos:

CRUD (Criação, Leitura, Atualização, Exclusão) de produtos.

Busca por slug e tags.

Processamento de Pedidos:

Criação e listagem de pedidos (Order).

Serviços Adicionais:

Implementação de envio de e-mails (como boas-vindas).

Upload de imagens para produtos.

Como Configurar e Executar
Siga os passos abaixo para clonar e executar o projeto localmente.

Pré-requisitos
Node.js & NPM/Yarn: Instalados na máquina.

MongoDB: Um servidor local ou um cluster remoto (ex: MongoDB Atlas) deve estar acessível.

1. Clonar o Repositório
2. Instalar Dependências
Utilize o gerenciador de pacotes de sua preferência (NPM ou Yarn)
3. Configurar Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto para configurar a conexão com o banco de dados e as chaves de segurança.
# Configuração do Servidor
PORT=3000

# Conexão com o MongoDB
CONNECTION_STRING='mongodb://localhost:27017/nome-do-seu-banco'

# Configuração do JWT
SECRET_KEY='sua_chave_secreta_para_jwt'

# Configuração de E-mail (Exemplo, pode variar)
EMAIL_SERVICE_API_KEY='sua_chave_de_email'

4. Iniciar o Servidor
Para iniciar o servidor em modo de desenvolvimento (com Nodemon):

Bash

npm run dev
# ou
yarn dev
O servidor estará rodando em http://localhost:3000 (ou na porta definida no seu arquivo .env).

💡 Aprendizados do Curso
Este projeto solidificou conhecimentos em:

Design e implementação de APIs RESTful.

Utilização eficiente de bancos de dados NoSQL com Mongoose.

Implementação de um pipeline de autenticação e autorização robusto.

Padrões de projeto como o Repository Pattern para desacoplamento de código.
