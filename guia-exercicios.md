# 🎯 Exercícios Práticos - Backend com Node.js

> **Objetivo:** Exercícios progressivos e divertidos para dominar backend  
> **Público:** Desenvolvedores frontend migrando para backend  
> **Meta:** Preparação para TCC em 6 meses  
> **Filosofia:** Curto, prático e conectado à realidade

---

## 📋 Índice

1. [Fundamentos de JavaScript](#-seção-1-fundamentos-de-javascript)
2. [Estruturas de Controle](#-seção-12-estruturas-de-controle)
3. [Ambiente Backend (Node.js)](#-seção-2-ambiente-backend-nodejs)
4. [HTTP e Conceitos de APIs](#-seção-3-http-e-conceitos-de-apis)
5. [Express.js - Framework Web](#-seção-4-expressjs---framework-web)
6. [Banco de Dados e Persistência](#-seção-5-banco-de-dados-e-persistência)
7. [Autenticação e Segurança](#-seção-6-autenticação-e-segurança)
8. [Testes e Boas Práticas](#-seção-7-testes-e-boas-práticas)
9. [Deploy e Produção](#-seção-8-deploy-e-produção)

---

## 🧠 Seção 1: Fundamentos de JavaScript

### 🎮 Bloco 1.1 - Sintaxe Básica (Aquecimento)

**Exercício 1: "Cartão de Visita Digital"**
- Crie variáveis com seus dados (nome, idade, cidade, profissão)
- Use `const` para valores fixos e `let` para valores que podem mudar
- Exiba tudo formatado no console usando template strings
- **Por quê?** Você vai usar isso para criar perfis de usuários no backend

**Exercício 2: "Calculadora de Orçamento"**
- Crie uma função que recebe o salário mensal
- Calcule 30% para aluguel, 20% para comida, 10% para economia
- Retorne um objeto com os valores calculados
- **Por quê?** APIs frequentemente fazem cálculos e retornam objetos JSON

---

### 🎨 Bloco 1.2 - Arrays e Objetos (Seu melhor amigo!)

**Exercício 3: "Lista de Compras Inteligente"**
- Crie um array com 5 produtos (objetos com `nome` e `preco`)
- Use `.map()` para adicionar um desconto de 10% em todos
- Use `.filter()` para mostrar apenas produtos abaixo de R$50
- Use `.reduce()` para calcular o total
- **Por quê?** 80% do backend é transformar dados assim!

**Exercício 4: "Catálogo de Filmes"**
- Crie 3 objetos de filmes (título, ano, gênero, nota)
- Coloque-os em um array
- Encontre o filme mais bem avaliado
- Filtre filmes de um gênero específico
- **Por quê?** Isso é exatamente o que APIs fazem: filtrar, ordenar, buscar

---

### ⚡ Bloco 1.3 - Funções (Reutilização = Poder!)

**Exercício 5: "Validador de Email"**
- Crie uma função que verifica se um email tem "@" e "."
- Retorne `true` ou `false`
- Teste com 3 emails diferentes
- **Por quê?** APIs validam dados de entrada constantemente

**Exercício 6: "Gerador de Senhas"**
- Crie uma função que gera uma senha aleatória
- Parâmetros: tamanho da senha
- Use caracteres, números e símbolos
- **Por quê?** Você vai criar sistemas de autenticação no backend

---

### 🔮 Bloco 1.4 - Programação Assíncrona (O "pulo do gato"!)

**Exercício 7: "Temporizador Simples"**
- Use `setTimeout` para exibir uma mensagem após 3 segundos
- Simule o carregamento de dados
- **Por quê?** Backend lida com operações que levam tempo (banco de dados, APIs externas)

**Exercício 8: "Buscador de Piadas"** 🎉
- Use `fetch` para buscar uma piada aleatória da API: `https://official-joke-api.appspot.com/random_joke`
- Exiba o setup e o punchline
- Use `async/await`
- **Por quê?** Isso é consumir uma API - você vai CRIAR APIs que outros consomem assim!

**Exercício 9: "Múltiplas Requisições"**
- Busque 3 piadas ao mesmo tempo usando `Promise.all()`
- Exiba todas juntas
- **Por quê?** APIs precisam fazer múltiplas consultas ao banco de forma eficiente

---

### 📦 Bloco 1.5 - Módulos

**Exercício 10: "Biblioteca de Utilidades"**
- Crie um arquivo `utils.js` com funções úteis:
  - `formatarMoeda(valor)`
  - `validarCPF(cpf)`
  - `calcularIdade(dataNascimento)`
- Crie outro arquivo `app.js` que importa e usa essas funções
- **Por quê?** No backend, você organiza código em módulos (controllers, services, etc.)

---

### ✅ Checkpoint da Seção 1

**Projeto Integrador: "Gerenciador de Tarefas no Console"**
- Crie um array de tarefas (objetos com `id`, `titulo`, `concluida`)
- Funções que você precisa criar:
  - `adicionarTarefa(titulo)` - adiciona nova tarefa
  - `listarTarefas()` - mostra todas
  - `listarPendentes()` - filtra apenas não concluídas
  - `concluirTarefa(id)` - marca como concluída
  - `removerTarefa(id)` - remove do array
- Execute tudo no console
- **Por quê?** Isso é um mini-CRUD - a base de qualquer API!

---

## 🔄 Seção 1.2: Estruturas de Controle

### 🎯 Bloco 1.2.1 - Condicionais: if/else

**Exercício 11: "Sistema de Notas Escolar"**
- Função que recebe nota (0-10)
- Retorne: "Reprovado" (< 6), "Recuperação" (6-7), "Aprovado" (7-9), "Excelente" (9-10)
- **Por quê?** Validação de dados é 50% do trabalho em APIs

**Exercício 12: "Validador de Login"**
- Função recebe `usuario` e `senha`
- Valide se ambos têm mais de 3 caracteres
- Retorne mensagens específicas para cada erro
- **Por quê?** Validação de campos é tarefa diária no backend

---

### ⚡ Bloco 1.2.2 - Operador Ternário

**Exercício 13: "Desconto VIP"**
- Função recebe `valorCompra` e `ehVIP` (boolean)
- Use ternário: VIP = 20% desconto, Normal = 5%
- **Por quê?** Deixa o código mais limpo em validações simples

**Exercício 14: "Classificação de Produto"**
- Função recebe `preco`
- Ternário aninhado: < 50 = "Econômico", 50-200 = "Padrão", > 200 = "Premium"
- **Por quê?** Útil, mas cuidado para não complicar demais

---

### 🔀 Bloco 1.2.3 - Switch Case ⭐ IMPORTANTE

**Exercício 15: "Cardápio Digital"**
- Função recebe número (1-5)
- Switch retorna prato correspondente
- default: "Opção inválida"
- **Por quê?** Switch é perfeito para menus e categorias fixas

**Exercício 16: "Status HTTP em Texto"** 🎯 ESSENCIAL
- Função recebe código HTTP (200, 201, 400, 404, 500)
- Switch retorna mensagem correspondente
- **Por quê?** Você vai trabalhar com esses códigos MUITO no backend!

---

### 🔁 Bloco 1.2.4 - Loop: for ⭐ IMPORTANTE

**Exercício 17: "Tabuada Geradora"**
- Função recebe um número
- Use `for` para gerar tabuada (1 a 10)
- Retorne array com resultados
- **Por quê?** Base para processar listas de dados

**Exercício 18: "Processador de Produtos"**
- Array de produtos (objetos com `nome` e `preco`)
- Use `for` para:
  - Contar produtos > R$100
  - Somar valor total
- **Por quê?** Processamento de inventário é típico em e-commerce

---

### 🔄 Bloco 1.2.5 - Loop: while

**Exercício 19: "Validador de Tentativas"**
- Simule senha incorreta
- Use `while` para limitar a 3 tentativas
- **Por quê?** Sistemas de login funcionam assim

---

### 🚀 Bloco 1.2.6 - for...of ⭐ MUITO USADO

**Exercício 20: "Analisador de Produtos"**
- Array de produtos (nome, preco, categoria)
- Use `for...of` para:
  - Encontrar o mais caro
  - Listar produtos de uma categoria
- **Por quê?** Mais simples que `for` tradicional, você vai usar MUITO!

---

### 🔑 Bloco 1.2.7 - for...in (Rápido)

**Exercício 21: "Inspector de Objeto"**
- Objeto `usuario` com várias propriedades
- Use `for...in` para exibir chaves e valores
- **Por quê?** Útil para debug e validação de campos

---

### ⛔ Bloco 1.2.8 - break e continue

**Exercício 22: "Busca Eficiente"**
- Array de 100 números
- Use `for` para encontrar primeiro > 50
- Use `break` para parar
- Use `continue` em outro loop para pular divisíveis por 3
- **Por quê?** Economizar processamento

---

### 🎯 Bloco 1.2.9 - Combinando Estruturas ⭐ ESSENCIAL

**Exercício 23: "Processador de Pedidos"** 🎯 PROJETO REAL
- Array de pedidos (id, items, status, valorTotal)
- Para cada pedido:
  - `for...of` para iterar
  - `switch` para processar status ("pendente", "pago", "enviado")
  - `if` para desconto se valor > 100
  - Operador ternário para frete grátis
- **Por quê?** Combina tudo que você aprendeu - é assim na vida real!

---

### ✅ Checkpoint - Estruturas de Controle

**"API de Tarefas no Console"** 🎯 PROJETO COMPLETO

Array de tarefas (id, titulo, concluida, prioridade)

**Funcionalidades:**

1. **Menu** (use `switch`):
   - 1: Listar todas
   - 2: Adicionar
   - 3: Concluir
   - 4: Remover
   - 5: Filtrar por prioridade
   - 0: Sair

2. **Listar** (use `for...of`):
   - Mostre com ternário: ✅ ou ⬜

3. **Adicionar** (use `if` para validar):
   - Valide se título não está vazio

4. **Filtrar** (use `for...of` + `if`):
   - Mostre apenas tarefas de prioridade escolhida

**Por quê?** Este projeto usa as estruturas mais importantes e simula um mini-backend real!

---

## 🔧 Seção 2: Ambiente Backend (Node.js)

### 🚀 Bloco 2.1 - Primeiros Passos com Node.js

**Exercício 24: "Hello World Profissional"**
- Instale o Node.js (use a versão LTS)
- Crie um arquivo `hello.js` que exibe "Olá Backend!"
- Execute com `node hello.js`
- **Por quê?** Você acabou de sair do navegador - agora seu JavaScript roda no servidor!

**Exercício 25: "Informações do Sistema"**
- Use `process.version` para ver sua versão do Node
- Use `process.platform` para ver seu sistema operacional
- Use `process.cwd()` para ver o diretório atual
- **Por quê?** `process` é um módulo global que você usará para variáveis de ambiente

---

### 📦 Bloco 2.2 - NPM Básico

**Exercício 26: "Seu Primeiro Projeto Node"**
- Crie uma pasta `meu-projeto-backend`
- Execute `npm init` e responda as perguntas
- Observe o arquivo `package.json` criado
- Modifique o "description" e "author"
- **Por quê?** Todo projeto backend começa assim!

**Exercício 27: "Instalando Pacotes"**
- Instale o pacote `chalk` (para colorir o console)
- Use-o para exibir mensagens coloridas
- Note que apareceu `node_modules/` e `package-lock.json`
- **Por quê?** Você vai usar MUITOS pacotes (express, jwt, bcrypt...)

---

### 📁 Bloco 2.3 - Módulos Nativos (Sistema de Arquivos)

**Exercício 28: "Criador de Anotações"**
- Use o módulo `fs` para criar um arquivo `anotacao.txt`
- Escreva uma mensagem nele
- Leia o arquivo e exiba o conteúdo no console
- **Por quê?** APIs precisam ler configurações, salvar logs, etc.

**Exercício 29: "Listador de Arquivos"**
- Use `fs` para listar todos os arquivos da pasta atual
- Filtre apenas arquivos `.js`
- **Por quê?** Você vai trabalhar com upload de arquivos em APIs

---

### 🌐 Bloco 2.4 - Primeiro Servidor HTTP

**Exercício 30: "Servidor Básico"** 🎉
- Use o módulo `http` nativo para criar um servidor
- Faça ele responder "Meu primeiro servidor!" na porta 3000
- Acesse `http://localhost:3000` no navegador
- **Por quê?** PARABÉNS! Você criou um backend que responde requisições!

**Exercício 31: "Servidor com Rotas"**
- Modifique o servidor para responder:
  - `/` → "Página Inicial"
  - `/sobre` → "Sobre Nós"
  - Qualquer outra URL → "404 - Não encontrado"
- **Por quê?** Isso é o conceito de roteamento - base de APIs REST

---

### ✅ Checkpoint da Seção 2

**Projeto Integrador: "API de Piadas em Arquivo"**
- Crie um arquivo `piadas.json` com 5 piadas
- Crie um servidor que:
  - `/piadas` → retorna todas as piadas
  - `/piada/aleatoria` → retorna uma piada aleatória
- Leia o arquivo com `fs` e responda com o conteúdo
- **Por quê?** Você juntou: servidor HTTP + módulos nativos + JSON!

---

## 🚪 Seção 3: HTTP e Conceitos de APIs

### 🔍 Bloco 3.1 - Entendendo HTTP

**Exercício 32: "Explorador de APIs Públicas"**
- Abra o Postman (ou Thunder Client no VS Code)
- Teste a API: `https://dog.ceo/api/breeds/list/all`
- Observe: método (GET), status code (200), headers, body
- **Por quê?** Você está do "outro lado" - consumindo uma API como frontend faz

**Exercício 33: "Testando Métodos HTTP"**
- Use a API de teste: `https://jsonplaceholder.typicode.com`
- Faça um GET em `/posts` (listar posts)
- Faça um POST em `/posts` (criar novo post)
- Observe as diferenças
- **Por quê?** GET = ler, POST = criar - você vai implementar isso!

---

### 📊 Bloco 3.2 - Status Codes

**Exercício 34: "Caçador de Erros"**
- Tente acessar `https://jsonplaceholder.typicode.com/posts/999999`
- Note o status 404
- Tente acessar uma URL inválida
- **Por quê?** Você vai retornar esses códigos nas suas APIs

**Exercício 35: "Coleção de Testes"**
- No Postman, crie uma coleção "Meus Testes"
- Adicione 5 requisições diferentes
- Salve para usar depois
- **Por quê?** Você vai testar SUA API assim quando criá-la!

---

### 🎨 Bloco 3.3 - JSON (Seu Novo Melhor Amigo)

**Exercício 36: "Conversor de Objetos"**
- Crie um objeto JavaScript com dados de um produto
- Converta para JSON string com `JSON.stringify()`
- Converta de volta para objeto com `JSON.parse()`
- **Por quê?** APIs recebem e enviam JSON o tempo todo

**Exercício 37: "Consumidor de API Real"**
- Use `fetch` no Node.js para consumir: `https://api.github.com/users/seu-usuario`
- Extraia apenas: nome, bio, número de repositórios
- **Por quê?** Sua API será consumida assim por frontends!

---

### ✅ Checkpoint da Seção 3

**Projeto Integrador: "Dashboard de APIs"**
- Crie um servidor que consome 3 APIs públicas diferentes
- Agregue os dados em um único JSON
- Exemplo de rotas:
  - `/clima` → consome API de clima
  - `/github` → consome API do GitHub
  - `/todos` → consome API de todos
- **Por quê?** Backends frequentemente consomem outras APIs!

---

## 🚀 Seção 4: Express.js - Framework Web

### 🎯 Bloco 4.1 - Hello Express

**Exercício 38: "Seu Primeiro Express"** 🎉
- Instale express: `npm install express`
- Crie um servidor Express básico
- Rota `/` que retorna "Express está funcionando!"
- Compare com o servidor HTTP nativo - note como é mais simples!
- **Por quê?** Express elimina 90% da complexidade do HTTP nativo

**Exercício 39: "Rotas Organizadas"**
- Crie 3 rotas GET:
  - `/` → Página inicial
  - `/sobre` → Informações
  - `/contato` → Dados de contato
- Retorne JSON em todas
- **Por quê?** Organização é tudo no backend!

---

### 📬 Bloco 4.2 - Recebendo Dados

**Exercício 40: "Eco Server"**
- Crie uma rota POST `/echo`
- Receba um JSON no body
- Retorne o mesmo JSON recebido
- Use `express.json()` middleware
- **Por quê?** Isso é a base de APIs que recebem dados!

**Exercício 41: "Formulário de Cadastro"**
- Crie POST `/cadastro`
- Receba: nome, email, idade
- Valide se todos os campos existem
- Retorne mensagem de sucesso ou erro
- **Por quê?** APIs validam dados antes de processar!

---

### 🎛️ Bloco 4.3 - Parâmetros de Rota

**Exercício 42: "API de Usuários Simulada"**
- Crie um array com 3 usuários (id, nome, email)
- Rota GET `/usuarios` → lista todos
- Rota GET `/usuarios/:id` → busca por ID
- **Por quê?** `:id` é um parâmetro dinâmico - você vai usar muito!

**Exercício 43: "Busca com Query Params"**
- Rota GET `/produtos?categoria=eletronicos&max=1000`
- Extraia `categoria` e `max` de `req.query`
- Filtre produtos com base nesses parâmetros
- **Por quê?** Query params são usados para filtros e paginação!

---

### 🛠️ Bloco 4.4 - Middleware

**Exercício 44: "Logger de Requisições"**
- Crie um middleware que loga:
  - Método HTTP usado
  - URL acessada
  - Hora da requisição
- Aplique em todas as rotas
- **Por quê?** Middlewares processam requisições antes de chegarem nas rotas!

**Exercício 45: "Validador de Headers"**
- Crie middleware que verifica se existe header `api-key`
- Se não existir, retorne erro 401
- Se existir, permita acesso
- **Por quê?** Isso é proteção básica de API!

---

### ✅ Checkpoint da Seção 4

**Projeto Integrador: "API de Tarefas com Express"**
- Array de tarefas em memória
- Rotas:
  - GET `/tarefas` → lista todas
  - GET `/tarefas/:id` → busca uma
  - POST `/tarefas` → cria nova
  - PUT `/tarefas/:id` → atualiza
  - DELETE `/tarefas/:id` → remove
- Middleware de log em todas as rotas
- **Por quê?** Isso é um CRUD completo - 80% das APIs fazem isso!

---

## 💾 Seção 5: Banco de Dados e Persistência

### 🎯 Bloco 5.1 - Conceitos Fundamentais

**Exercício 46: "Entendendo Dados Persistentes"**
- Pegue seu projeto de tarefas da Seção 4
- Reinicie o servidor e note: todos os dados sumiram!
- Anote 3 problemas disso em produção
- **Por quê?** Arrays em memória não salvam dados - você PRECISA de banco!

**Exercício 47: "SQL vs NoSQL - Comparação Prática"**
- Desenhe no papel a estrutura de um e-commerce:
  - Usuários, Produtos, Pedidos, Itens do Pedido
- Tente representar isso em JSON (documento)
- Tente representar isso em tabelas relacionadas
- **Por quê?** Entender QUANDO usar cada tipo de banco

---

### 🛠️ Bloco 5.2 - Setup MySQL ⭐ PARA TCC

**Exercício 48: "Instalação e Primeiro Contato"**
- Baixe MySQL Community + Workbench
- Configure senha do root
- Crie seu primeiro banco: `meu_tcc_db`
- Use o Workbench para visualizar
- **Por quê?** Ambiente visual facilita MUITO no início

**Exercício 49: "Primeira Tabela Visual"**
- No MySQL Workbench, use o Model Designer
- Crie tabela `usuarios`:
  - id (INT, AUTO_INCREMENT, PRIMARY KEY)
  - nome (VARCHAR 100)
  - email (VARCHAR 100, UNIQUE)
  - senha (VARCHAR 255)
  - criado_em (TIMESTAMP)
- Gere o SQL e execute
- **Por quê?** Visualizar relacionamentos é essencial para TCC

---

### 📊 Bloco 5.3 - SQL Básico ⭐ IMPORTANTE

**Exercício 50: "CRUD Manual no Workbench"**
Execute esses comandos SQL e observe os resultados:

- INSERT: adicione 3 usuários
- SELECT: liste todos, depois filtre por ID
- UPDATE: modifique um nome
- DELETE: remova um usuário

**Por quê?** Você precisa entender SQL antes de usar ORMs!

**Exercício 51: "Consultas com Filtros"**
- Insira 5 usuários diferentes
- Pratique SELECT com:
  - WHERE (filtrar por email)
  - LIKE (buscar nomes que começam com 'J')
  - ORDER BY (ordenar por nome)
  - LIMIT (pegar só 3 resultados)
- **Por quê?** APIs fazem filtros e buscas o tempo todo

---

### 🔗 Bloco 5.4 - Relacionamentos ⭐ ESSENCIAL PARA TCC

**Exercício 52: "Desenhando Relacionamentos"**
Crie no Model Designer do Workbench:

**Tabelas:**
- `categorias` (id, nome)
- `produtos` (id, nome, preco, categoria_id)

**Relacionamento:**
- 1 categoria tem N produtos (1:N)
- Use Foreign Key de `produtos.categoria_id` → `categorias.id`

**Por quê?** Seu TCC VAI ter relacionamentos entre tabelas!

**Exercício 53: "JOIN na Prática"**
- Insira 2 categorias: "Eletrônicos", "Livros"
- Insira 4 produtos (2 de cada categoria)
- Execute JOIN para buscar produtos com nome da categoria
- **Por quê?** JOINs conectam dados relacionados - essencial!

---

### 🎨 Bloco 5.5 - Prisma ORM ⭐ RECOMENDADO

**Exercício 54: "Setup Prisma"**
- Instale: `npm install prisma @prisma/client`
- Execute: `npx prisma init`
- Configure `.env` com sua conexão MySQL
- **Por quê?** Prisma facilita trabalhar com banco sem escrever SQL manual

**Exercício 55: "Primeiro Schema Prisma"**
- Edite `prisma/schema.prisma` com model Usuario
- Execute: `npx prisma migrate dev --name init`
- Veja a tabela criada no Workbench!
- **Por quê?** Prisma gera SQL automaticamente - menos erros!

**Exercício 56: "CRUD com Prisma"** 🎯 PROJETO REAL
- Conecte Prisma no Express
- Crie rotas que usam Prisma Client:
  - POST `/usuarios` - criar
  - GET `/usuarios` - listar todos
  - GET `/usuarios/:id` - buscar um
  - PUT `/usuarios/:id` - atualizar
  - DELETE `/usuarios/:id` - deletar
- **Por quê?** Isso é uma API real conectada ao banco!

---

### 🔄 Bloco 5.6 - Relacionamentos com Prisma

**Exercício 57: "Blog com Posts e Comentários"**
- Crie models: Post, Comentario com relacionamentos
- Migre o banco
- Crie rota que busca post COM comentários (use `include`)
- **Por quê?** APIs retornam dados relacionados (pedido + itens, post + comentários)

---

### ✅ Checkpoint da Seção 5

**Projeto Integrador: "API de Biblioteca com MySQL"** 🎯 IDEAL PARA TCC

**Tabelas (desenhe no Workbench primeiro!):**

1. **autores** (id, nome, nacionalidade)
2. **livros** (id, titulo, ano, autorId, disponivel)
3. **emprestimos** (id, livroId, nomeUsuario, dataEmprestimo, dataDevolucao)

**Relacionamentos:**
- 1 autor → N livros
- 1 livro → N empréstimos

**Rotas da API:**

**Autores:**
- POST `/autores` - cadastrar
- GET `/autores` - listar (com contagem de livros)
- GET `/autores/:id/livros` - livros do autor

**Livros:**
- POST `/livros` - cadastrar (recebe autorId)
- GET `/livros` - listar (com nome do autor via JOIN)
- GET `/livros/disponiveis` - filtrar disponíveis
- PUT `/livros/:id` - atualizar

**Empréstimos:**
- POST `/emprestimos` - emprestar (marca livro como indisponível)
- PUT `/emprestimos/:id/devolver` - devolver (marca disponível)
- GET `/emprestimos/ativos` - listar não devolvidos

**Por quê?** Este projeto tem TUDO que um TCC precisa: relacionamentos, CRUD completo, regras de negócio!

---

## 🔐 Seção 6: Autenticação e Segurança

### 🔒 Bloco 6.1 - Hash de Senhas ⭐ ESSENCIAL

**Exercício 58: "Entendendo o Perigo"**
- Vá no banco MySQL e veja as senhas da tabela usuarios
- Estão em texto puro? 😱
- Anote por que isso é PÉSSIMO
- **Por quê?** NUNCA salve senhas em texto puro - é falha de segurança grave!

**Exercício 59: "Bcrypt na Prática"**
- Instale: `npm install bcrypt`
- Crie função `hashSenha(senha)` que retorna hash
- Crie função `verificarSenha(senha, hash)` que compara
- Teste com a senha "123456"
- **Por quê?** Bcrypt é o padrão da indústria para senhas

**Exercício 60: "Cadastro Seguro"**
- Modifique rota POST `/usuarios` para:
  - Fazer hash da senha antes de salvar
  - NUNCA retornar a senha na resposta
- **Por quê?** Proteção básica obrigatória

---

### 🎫 Bloco 6.2 - JWT (JSON Web Tokens) ⭐ IMPORTANTE

**Exercício 61: "Entendendo JWT"**
- Acesse jwt.io
- Cole um token de exemplo
- Veja as 3 partes: header, payload, signature
- Modifique o payload e veja a assinatura quebrar
- **Por quê?** JWT permite autenticação stateless (sem sessão no servidor)

**Exercício 62: "Sistema de Login"**
- Instale: `npm install jsonwebtoken`
- Crie POST `/login`:
  - Recebe email e senha
  - Verifica se usuário existe
  - Compara senha com bcrypt
  - Se OK, gera token JWT
  - Retorna o token
- **Por quê?** Isso é autenticação real!

**Exercício 63: "Middleware de Autenticação"** 🎯 CRUCIAL
- Crie middleware `verificarToken`:
  - Extrai token do header `Authorization: Bearer TOKEN`
  - Verifica se token é válido
  - Se sim, adiciona dados do usuário em `req.usuario`
  - Se não, retorna erro 401
- Aplique em rotas protegidas
- **Por quê?** Proteger rotas é essencial em qualquer API

---

### 🛡️ Bloco 6.3 - Validação de Dados

**Exercício 64: "Validação com Zod"**
- Instale: `npm install zod`
- Crie schema de validação para cadastro:
  - nome: mínimo 3 caracteres
  - email: formato válido
  - senha: mínimo 6 caracteres
- Use antes de processar dados
- **Por quê?** Validar entrada previne bugs e ataques

**Exercício 65: "Middleware de Validação"**
- Crie middleware genérico `validar(schema)`
- Use em múltiplas rotas
- **Por quê?** Reutilizar validação deixa código limpo

---

### 🔐 Bloco 6.4 - CORS e Headers de Segurança

**Exercício 66: "Configurando CORS"**
- Instale: `npm install cors`
- Configure para aceitar apenas seu domínio frontend
- Teste com Postman
- **Por quê?** Controlar quem acessa sua API

**Exercício 67: "Helmet.js"**
- Instale: `npm install helmet`
- Aplique no Express
- Veja headers de segurança adicionados
- **Por quê?** Proteção contra ataques comuns (XSS, etc)

---

### ✅ Checkpoint da Seção 6

**Projeto Integrador: "API Segura de Tarefas"**

**Funcionalidades:**

1. **Autenticação:**
   - POST `/registro` - cadastro com hash
   - POST `/login` - retorna JWT
   - Todas as outras rotas: protegidas com middleware

2. **Tarefas (apenas do usuário logado):**
   - GET `/tarefas` - listar suas tarefas
   - POST `/tarefas` - criar (automaticamente associada ao usuário do token)
   - PUT `/tarefas/:id` - atualizar (só se for sua)
   - DELETE `/tarefas/:id` - deletar (só se for sua)

3. **Validações:**
   - Zod em todas as entradas
   - CORS configurado
   - Helmet aplicado

**Por quê?** API completa com segurança profissional!

---

## 🧪 Seção 7: Testes e Boas Práticas

### 🎯 Bloco 7.1 - Testes Unitários (Opcional para TCC)

**Exercício 68: "Primeiro Teste com Jest"**
- Instale: `npm install --save-dev jest`
- Teste função `hashSenha` e `validarEmail`
- **Por quê?** Garantir que funções funcionam isoladamente

---

### 📚 Bloco 7.2 - Arquitetura em Camadas ⭐ BOA PRÁTICA

**Exercício 69: "Refatorando para MVC"** 🎯 IMPORTANTE PARA TCC

Reorganize seu código:

```
src/
├── controllers/    # Recebe req, res - lida com HTTP
│   └── usuarioController.js
├── services/       # Lógica de negócio
│   └── usuarioService.js
├── repositories/   # Acesso ao banco (Prisma)
│   └── usuarioRepository.js
├── middlewares/
├── routes/
└── app.js
```

**Fluxo:**
Route → Controller → Service → Repository → Banco

**Por quê?** Código organizado impressiona em TCC e facilita manutenção!

---

### 📖 Bloco 7.3 - Documentação ⭐ IMPORTANTE PARA TCC

**Exercício 70: "Swagger Básico"**
- Instale: `npm install swagger-ui-express swagger-jsdoc`
- Documente 3 rotas com comentários JSDoc
- Acesse `/api-docs` para ver documentação visual
- **Por quê?** Professores ADORAM documentação profissional!

---

### ✅ Checkpoint da Seção 7

**Projeto: "Refatorar API de Biblioteca"**
- Reorganize em camadas (MVC)
- Adicione Swagger em 5 rotas principais
- **Por quê?** Código profissional para apresentar no TCC!

---

## 🌐 Seção 8: Deploy e Produção

### 🚀 Bloco 8.1 - Variáveis de Ambiente ⭐ ESSENCIAL

**Exercício 71: "Configurando .env"**
- Instale: `npm install dotenv`
- Crie `.env` com DATABASE_URL, JWT_SECRET, PORT
- Adicione `.env` no `.gitignore`
- **Por quê?** NUNCA commite senhas no Git!

---

### ☁️ Bloco 8.2 - Deploy no Render ⭐ RECOMENDADO

**Exercício 72: "Primeiro Deploy"** 🎉
1. Crie conta no Render (grátis)
2. Conecte repositório GitHub
3. Configure variáveis de ambiente
4. Deploy automático!
5. Teste sua API online

**Por quê?** Sua API precisa estar online para apresentar no TCC!

**Exercício 73: "Banco em Produção"**
- Use Neon.tech (PostgreSQL gratuito) OU
- Configure MySQL no próprio Render
- Migre schema Prisma para produção
- **Por quê?** Banco local não serve para produção!

---

### 📊 Bloco 8.3 - Monitoramento Básico

**Exercício 74: "Logs Estruturados"**
- Instale: `npm install winston`
- Configure logs de erro, info, warn
- Veja logs no Render dashboard
- **Por quê?** Debugar em produção

---

### ✅ Checkpoint Final da Seção 8

**Projeto: "API de Biblioteca Online"**

**Entregáveis para o TCC:**

1. ✅ Código no GitHub (público ou privado)
2. ✅ API rodando no Render (URL pública)
3. ✅ Banco de dados em produção
4. ✅ Documentação Swagger
5. ✅ README completo com:
   - Como rodar localmente
   - Endpoints disponíveis
   - Tecnologias usadas
   - Screenshots

**Por quê?** Isso é um TCC completo e profissional! 🎓

---

## 🎓 Cronograma Sugerido (6 meses)

| Mês | Seções | Foco |
|-----|--------|------|
| **1-2** | 1-3 | JavaScript + Node.js + HTTP |
| **3** | 4 | Express - construir API básica |
| **4** | 5 | MySQL + Prisma - persistência |
| **5** | 6 | Autenticação + Segurança |
| **6** | 7-8 | Organizar código + Deploy + Documentação |

---

## 🎓 Tabela de Referência Rápida - Estruturas de Controle

| Estrutura | Use Quando | Frequência no Backend |
|-----------|------------|----------------------|
| **if/else** | Decisões e validações | ⭐⭐⭐⭐⭐ Todo dia |
| **Ternário** | If simples em 1 linha | ⭐⭐⭐⭐ Muito |
| **switch** | 3+ opções fixas | ⭐⭐⭐⭐ Menus/categorias |
| **for** | Controle preciso | ⭐⭐⭐ Médio |
| **for...of** | Iterar arrays | ⭐⭐⭐⭐⭐ O MAIS USADO |
| **while** | Condição desconhecida | ⭐⭐ Pouco |
| **for...in** | Propriedades de objeto | ⭐⭐ Às vezes |
| **break/continue** | Otimizar loops | ⭐⭐⭐ Útil |

---

## 💡 Dicas Finais para o TCC

1. **MySQL + Workbench:** Visual ajuda MUITO nas apresentações
2. **Prisma:** Menos SQL manual = menos bugs
3. **Swagger:** Documentação impressiona professores
4. **Deploy:** API online mostra profissionalismo
5. **GitHub:** Mostre histórico de commits (trabalho contínuo)
6. **Foque em:** `if/else`, `for...of`, `switch` - são 80% do uso real
7. **Combine estruturas:** Projetos reais sempre misturam tudo!

---

## 📊 Resumo de Exercícios

- **Total:** 74 exercícios progressivos
- **Projetos integradores:** 10 checkpoints práticos
- **Foco:** Do básico ao deploy, preparado para TCC
- **Filosofia:** Curto, divertido, conectado à realidade

---

**Pronto para começar sua jornada no backend! 🚀**

> Lembre-se: faça um exercício por vez, pratique, e vá para o próximo. A consistência é mais importante que a velocidade!