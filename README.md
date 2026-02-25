# Landing Page — Academia Motta

Landing page desenvolvida para apresentar a Academia Motta, com foco em conversão para cadastro e destaque dos planos.

O projeto foi feito com Next.js (App Router), React, TypeScript e Tailwind CSS.

## Objetivo

- Apresentar proposta da academia de forma direta
- Mostrar benefícios e planos com leitura rápida
- Levar o usuário para o formulário de cadastro

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Rodando localmente

Pré-requisitos:

- Node.js 20+
- npm

Instalação e execução:

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000` no navegador.

## Scripts disponíveis

- `npm run dev` — inicia ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run start` — inicia o app em modo produção
- `npm run lint` — executa validação de lint

## Estrutura principal

```text
src/
	app/
		layout.tsx
		page.tsx
		globals.css
public/
```

- `src/app/page.tsx`: estrutura completa da landing page (hero, planos, benefícios e cadastro)
- `src/app/globals.css`: estilos globais
- `public/`: imagens usadas no layout

## Observações

- O formulário atual é estático (sem integração com backend).
- O menu mobile já está implementado com `useState`.
- O conteúdo está em português e pode ser ajustado facilmente direto no `page.tsx`.