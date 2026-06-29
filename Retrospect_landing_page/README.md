# Retrospect

Aplicativo de ecoturismo consciente. Permite identificar espécies com a
câmera, explorar trilhas, completar desafios ecológicos, acompanhar um
plano VIP e entrar em contato com a equipe — tudo pensado para conectar
pessoas e natureza de forma responsável.

## Integrante

- Gustavo Pellá Bazanella

## Descrição do sistema

O Retrospect é uma landing page interativa que apresenta as funcionalidades
do app de ecoturismo Retrospect. Além das seções de apresentação (hero,
galeria, funcionalidades, desafios e plano VIP), o projeto implementa um
fluxo funcional completo de **CRUD de Trilhas**, permitindo que o usuário
cadastre, consulte, edite e exclua trilhas que já percorreu ou planeja
explorar, e um **formulário de contato** que envia e-mail de verdade através
de uma function serverless.

## Tecnologias utilizadas

- React + Vite
- JavaScript (JSX)
- Netlify (hospedagem e deploy contínuo via Git)
- Netlify Functions (endpoint serverless para envio de e-mail)
- Nodemailer (envio de e-mail via SMTP)
- localStorage (persistência do CRUD de Trilhas no navegador)

## Funcionalidades implementadas

- **Hero**: apresentação inicial do app com estatísticas e chamadas para ação.
- **Galeria de trilhas**: carrossel com destaques de exploração, identificação,
  comunidade e gamificação.
- **Minhas Trilhas (CRUD completo)**:
  - Cadastro de trilha (nome, localização, dificuldade e descrição).
  - Consulta/listagem das trilhas cadastradas.
  - Edição de uma trilha existente.
  - Exclusão de trilha, com confirmação.
  - Persistência local: os dados continuam disponíveis após recarregar a página.
- **Funcionalidades do app**: escaneamento por câmera, mapa interativo, rede
  social, desafios ambientais, modo seguro e acessibilidade.
- **Desafios ecológicos**: cartões com pontuação e nível de dificuldade.
- **Plano VIP**: comparação entre plano mensal e anual.
- **Contato**: formulário (nome, e-mail, mensagem) que envia e-mail real via
  Netlify Function, com validação no frontend e no backend da function.

## Instruções para execução

### Pré-requisitos

- Node.js instalado
- Conta no Netlify (para testar o envio de e-mail localmente)

### Passos

```bash
npm install
npm install --save-dev netlify-cli
```

Crie um arquivo `.env` na raiz do projeto com:

```dotenv
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
CONTACT_EMAIL=email-que-recebe@gmail.com
ALLOWED_ORIGIN=
```

Em seguida, execute:

```bash
npx netlify dev
```

Acesse `http://localhost:8888` no navegador. A aplicação completa, incluindo
o formulário de contato funcional, estará disponível nesse endereço.

> Caso queira apenas visualizar a interface sem testar o envio de e-mail,
> também é possível rodar `npm run dev` e acessar `http://localhost:5173`.

## Link do vídeo de demonstração

[Inserir link aqui]