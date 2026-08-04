---
source_roadmap: roadmap_equilibrado.md
phase_index: 1
phase_title: "Setup de Repositório e Estrutura Base"
epic_title: "Painel de Consulta de Clientes"
generated_at: "2025-01-23T10:00:00"
---

# Story: Setup de Repositório e Estrutura Base

## Context

Configurar a estrutura inicial do projeto React/Vue com todas as ferramentas de desenvolvimento, linters, formatters, pre-commit hooks e documentação básica. Esta fase estabelece a fundação técnica para todo o desenvolvimento subsequente.

**Objetivo**: Criar um ambiente de desenvolvimento padronizado, reproduzível e alinhado com as boas práticas do ecossistema.

**Limites de entrega**: Estrutura de pastas, configurações de ferramentas, scripts de build/dev, documentação de setup.

## Tasks

- [ ] Criar estrutura de pastas do projeto
  - [ ] src/ (código-fonte)
  - [ ] public/ (assets estáticos)
  - [ ] tests/ (testes unitários e E2E)
  - [ ] docs/ (documentação técnica)
- [ ] Configurar package.json com scripts
  - [ ] dev (servidor de desenvolvimento)
  - [ ] build (build de produção)
  - [ ] test (executar testes)
  - [ ] lint (linter)
  - [ ] format (formatter)
- [ ] Configurar ESLint e Prettier
  - [ ] Regras de linting
  - [ ] Regras de formatação
  - [ ] Integração entre ESLint e Prettier
- [ ] Configurar pre-commit hooks (Husky)
  - [ ] Hook de lint
  - [ ] Hook de formatação
  - [ ] Hook de testes (opcional)
- [ ] Criar README.md
  - [ ] Instruções de setup
  - [ ] Comandos de desenvolvimento
  - [ ] Estrutura do projeto
  - [ ] Convenções de código
- [ ] Configurar .gitignore
  - [ ] node_modules/
  - [ ] dist/
  - [ ] .env
  - [ ] Arquivos de IDE

## Acceptance Criteria

- AC-1.1: Estrutura de pastas criada (src/, public/, tests/, docs/)
- AC-1.2: package.json configurado com scripts (dev, build, test, lint)
- AC-1.3: ESLint e Prettier configurados e funcionando
- AC-1.4: Pre-commit hooks funcionando (lint + format)
- AC-1.5: README com instruções de setup e desenvolvimento
- AC-1.6: .gitignore configurado
- AC-1.7: Projeto inicializa sem erros (npm run dev)

## Worktree Config

- **story-slug**: setup-repositorio-estrutura-base
- **branch-name**: story/setup-repositorio-estrutura-base
- **base-branch**: main

## Test Strategy

- **unit-test-runner**: npm run test
- **e2e-required**: nao
- **coverage-threshold**: N/A (fase de setup)
- **test-paths**: tests/

## PR Config

- **draft**: true
- **base**: main
- **labels**: ["story/setup-repositorio-estrutura-base", "setup", "infra"]

## Autonomy Blockers

- **Escolha de framework**: React ou Vue? (PRD menciona ambos como opções) — Decisão necessária antes de iniciar
- **Versão do Node.js**: Qual versão usar? (recomendação: LTS atual, ex: 20.x)
- **Package manager**: npm, yarn ou pnpm? (recomendação: npm ou bun conforme blueprint)

## Technical Notes

- **Dependências**: Nenhuma (primeira fase)
- **Pontos de integração**: N/A
- **Riscos**: Escolha de ferramentas incompatíveis com o hub
- **Referências**:
  - PRD: docs/planning/PRD.md (seção 6.1 Stack Técnico)
  - Blueprint: docs/planning/blueprints/blueprint-AS1I-rendered.md (seção 3 Stack)
  - Arquétipo AS1I: Front interno, sem persistência, hospedado no hub
  - Stack sugerido: React 18+ + Vite + bun (conforme blueprint)
  - Estilização: Tailwind CSS + Design System (obrigatório conforme PRD)
