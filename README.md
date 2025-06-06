# 📊 GitHub Dashboard
Um painel interativo desenvolvido com **React**, **TypeScript** e **Vite**, que consome a API pública do GitHub para exibir dados de usuários, repositórios e estrelas em forma visual e organizada.

## 🧠 Visão Geral
Este projeto foi arquitetado para ser modular, testável e escalável.
A estrutura é baseada na separação de responsabilidades com o padrão View + Controller, além de um sistema organizado para queries e serviços de API.

## 🧱 Arquitetura e Padrões

### 🗂️ Componentes
Os componentes seguem uma organização baseada em arquivos separados por função:

- `.controller.tsx` — Lógica de estado, efeitos e callbacks.

- `.view.tsx` — JSX e estrutura visual.

- `.spec.tsx` — Testes unitários.

- `index.ts` — Exportação centralizada.


### 🔍 Queries
A pasta `queries/` é organizada por domínio (ex: user, reposList) e contém:

- `hooks/ —` Hooks personalizados para consumo da API.

- `queries.ts` — Funções para chamadas HTTP.

- `types.ts` — Tipagens com TypeScript.

### 🌐 Roteamento
A pasta `router/` centraliza:

Definições de rotas (`Routes.tsx`)

Tipagens (`RouterTypes.ts`)

O componente principal de roteamento (`Router.tsx`)

___

## 📁 Estrutura de Pastas

```bash
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── NomeDoComponente/
│   │   │   ├── Nome.controller.tsx
│   │   │   ├── Nome.view.tsx
│   │   │   ├── Nome.spec.tsx
│   │   │   └── index.ts
│   ├── pages/
│   │   └── Dashboard/
│   ├── queries/
│   │   ├── reposList/
│   │   └── user/
│   ├── router/
│   ├── services/
│   ├── App.tsx
│   ├── main.tsx
│   ├── setupTests.ts
│   └── vite-env.d.ts
├── index.html
├── eslint.config.js
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
___
## ✅ Benefícios da Arquitetura

| Aspecto                      | Benefício                                                  |
| ---------------------------- | ---------------------------------------------------------- |
| Separação View/Controller    | Facilita manutenção, testes e clareza de responsabilidades |
| Modularidade                 | Componentes e páginas isoladas e reutilizáveis             |
| Escalabilidade               | Permite crescimento sem comprometer o código existente     |
| Testabilidade                | Arquivos `.spec.tsx` dedicados por componente              |
| Clareza em dados/API         | Queries organizadas por domínio                            |
| Tipagem forte com TypeScript | Reduz erros, melhora DX com autocomplete e validações      |

---

## 🚀 Como rodar o projeto
```bash
# 1. Clone o repositório
git clone https://github.com/rb-cesar/github-dashboard.git
cd github-dashboard

# 2. Instale as dependências
yarn install
# ou
npm install

# 3. Rode o projeto
yarn dev
# ou
npm run dev

```