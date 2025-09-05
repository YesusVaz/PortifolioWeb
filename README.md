# Portifólio — Yesus Vaz

Um portfólio pessoal construído com Next.js, TypeScript e Tailwind CSS. Projeto focado em performance, acessibilidade e experiência visual.

## Tecnologias

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui (componentes)
- next-themes (tema claro/escuro)
- pnpm (gerenciador de pacotes)

## Recursos principais

- Hero com animação de digitação
- Header profissional e responsivo
- Carrossel de projetos (arrastar e navegar)
- Seção de contato com formulário (mailto) e links diretos
- Suporte a idiomas: Português (pt), English (en) e Español (es)
- Tema claro/escuro persistente via localStorage

## Estrutura (resumo)

- `src/app` — layout, providers e rotas
- `src/components` — componentes reutilizáveis (hero, header, projects, contact...)
- `src/components/ui` — componentes gerados pelo shadcn/ui
- `src/contexts` — providers (idioma, tema)
- `src/lib` — traduções, constantes e utilitários
- `public/` — assets públicos

## Como rodar (Windows - PowerShell)

```powershell
pnpm install
pnpm dev
```

O site normalmente abre em `http://localhost:3000` (ou outra porta livre).

## Como editar conteúdo rápido

- Traduções: `src/lib/translations.ts`
- Projetos exibidos: `src/components/projects.tsx`
- Hero / animações: `src/components/hero.tsx`
- Tema e variáveis: `src/app/globals.css`

## Personalização e shadcn

Os componentes em `src/components/ui` vêm do shadcn. Para gerar novos componentes use:

```powershell
pnpm dlx shadcn@latest add <component-name>
```

## Contato

- Email: `#`
- GitHub: https://github.com/yesusvaz
---


