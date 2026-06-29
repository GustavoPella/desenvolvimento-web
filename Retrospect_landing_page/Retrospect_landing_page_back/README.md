# Retrospect Backend

API REST do CRUD de Trilhas do Retrospect, em Java + Spring Boot + Maven,
com persistência em banco SQL (H2).

## Tecnologias

- Java 17
- Maven
- Spring Boot 3.5
- Spring Data JPA
- H2 Database (arquivo local, SQL real por baixo do JPA)

## Organização do código

O projeto segue uma separação próxima de Arquitetura Hexagonal (Ports & Adapters):

```
src/main/java/com/retrospect/backend/
├── domain/                         entidade Trilha
├── application/                    regras de negócio e porta do repositório
│   ├── TrilhaRepositoryPort.java   porta (interface)
│   └── TrilhaService.java         casos de uso
└── infrastructure/
    ├── persistence/                adaptador de saída (banco de dados)
    │   ├── TrilhaJpaRepository.java
    │   └── TrilhaRepositoryAdapter.java
    └── web/                        adaptador de entrada (HTTP)
        ├── TrilhaController.java
        └── CorsConfig.java
```

A camada `application` depende apenas da porta (`TrilhaRepositoryPort`), nunca
do Spring Data diretamente — quem implementa essa porta é o adaptador em
`infrastructure.persistence`. Isso permite trocar o H2 por outro banco sem
alterar a regra de negócio.

> Observação: por simplicidade, a entidade `Trilha` usa anotações JPA
> diretamente (em vez de ter uma entidade de domínio pura separada de uma
> entidade de persistência). Para um sistema maior, o ideal seria separar
> essas duas representações.

## Modelo de dados

Tabela `trilha`, criada automaticamente pelo Hibernate a partir da entidade:

| Coluna       | Tipo    | Observação        |
|--------------|---------|--------------------|
| id           | BIGINT  | chave primária, autoincremento |
| nome         | VARCHAR |                    |
| localizacao  | VARCHAR |                    |
| dificuldade  | VARCHAR | Fácil / Médio / Difícil |
| descricao    | VARCHAR |                    |

## Como executar

Pré-requisitos: JDK 17+ e Maven instalados.

```bash
mvn spring-boot:run
```

A API sobe em `http://localhost:8080`. O banco H2 é criado como arquivo em
`./data/retrospect.mv.db` na primeira execução, e os dados persistem entre
reinicializações.

Console do H2 (visualizar as tabelas e dados pelo navegador):

```
http://localhost:8080/h2-console
```

Na tela de login do console, use a mesma URL do `application.properties`:

```
JDBC URL: jdbc:h2:file:./data/retrospect;AUTO_SERVER=TRUE
User Name: sa
Password: (em branco)
```

## Endpoints

| Método | Rota               | Descrição                  |
|--------|--------------------|------------------------------|
| GET    | `/api/trilhas`      | Lista todas as trilhas      |
| GET    | `/api/trilhas/{id}` | Busca uma trilha por id     |
| POST   | `/api/trilhas`      | Cadastra uma nova trilha    |
| PUT    | `/api/trilhas/{id}` | Atualiza uma trilha         |
| DELETE | `/api/trilhas/{id}` | Remove uma trilha           |

Exemplo de corpo para `POST`/`PUT`:

```json
{
  "nome": "Trilha do Itaimbezinho",
  "localizacao": "Cambará do Sul - RS",
  "dificuldade": "Difícil",
  "descricao": "Vista para o cânion mais famoso do Brasil."
}
```

Teste rápido com `curl`:

```bash
curl -X POST http://localhost:8080/api/trilhas ^
  -H "Content-Type: application/json" ^
  -d "{\"nome\":\"Teste\",\"localizacao\":\"PR\",\"dificuldade\":\"Facil\",\"descricao\":\"teste\"}"

curl http://localhost:8080/api/trilhas
```

## Integração com o frontend

Este backend é independente do frontend React/Vite já implementado (que usa
`localStorage`). Os dois não estão conectados por padrão. Se quiser que o
frontend passe a consumir esta API em vez do `localStorage`, basta trocar as
chamadas de `localStorage.getItem/setItem` no componente `Trilhas.jsx` por
`fetch` para `http://localhost:8080/api/trilhas` — o CORS já está liberado
para `http://localhost:5173` e `http://localhost:8888`.
