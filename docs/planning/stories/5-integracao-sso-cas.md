---
source_roadmap: roadmap_equilibrado.md
phase_index: 5
phase_title: "Integração SSO com CAS"
epic_title: "Painel de Consulta de Clientes"
generated_at: "2025-01-23T10:00:00"
---

# Story: Integração SSO com CAS

## Context

Configurar autenticação CAS (Central Authentication Service) via auth-proxy do hub, validar fluxos de login/logout, proteger rotas privadas e exibir informações do usuário autenticado.

**Objetivo**: Garantir que apenas usuários autenticados via CAS possam acessar a aplicação, com fluxos de login/logout funcionais e informações do usuário exibidas no Header.

**Limites de entrega**: Autenticação CAS completa, rotas protegidas, exibição de user info. NÃO inclui autorização por perfis (todos os usuários autenticados têm acesso total).

## Tasks

- [ ] Configurar auth-proxy no deployment (Cloud Run)
  - [ ] Atualizar configuração de infraestrutura para habilitar auth-proxy
  - [ ] Configurar variáveis de ambiente necessárias (CAS_URL, CALLBACK_URL, etc.)
- [ ] Implementar fluxo de login CAS
  - [ ] Redirecionar usuário não autenticado para CAS
  - [ ] Processar callback do CAS e armazenar token/sessão
  - [ ] Validar token com auth-proxy
- [ ] Implementar fluxo de logout
  - [ ] Botão de logout no Header
  - [ ] Limpar sessão local e redirecionar para logout do CAS
- [ ] Proteger rotas privadas
  - [ ] Middleware/guard para verificar autenticação antes de acessar rotas
  - [ ] Redirecionar para login se não autenticado
- [ ] Exibir informações do usuário
  - [ ] Buscar user info do auth-proxy (nome, email)
  - [ ] Exibir no Header (ex: "Olá, João Silva")
- [ ] Abrir ticket #infra-platform para ALLOWED_APPS
  - [ ] Solicitar inclusão da aplicação na lista ALLOWED_APPS do CAS
  - [ ] Aguardar aprovação e configuração
- [ ] Testar fluxos completos
  - [ ] Login → acesso à aplicação → logout
  - [ ] Tentativa de acesso sem autenticação → redirecionamento para login
  - [ ] Validar em dev e qa

## Acceptance Criteria

- AC-5.1: Fluxo de login CAS funcional (usuário não autenticado é redirecionado para CAS, após login retorna à aplicação)
- AC-5.2: Fluxo de logout funcional (botão de logout limpa sessão e redireciona para logout do CAS)
- AC-5.3: Rotas protegidas redirecionam para login (tentativa de acesso sem autenticação resulta em redirecionamento)
- AC-5.4: Informações do usuário (nome, email) exibidas no Header após login
- AC-5.5: Token/sessão validado pelo auth-proxy (requisições incluem token válido)
- AC-5.6: Ticket #infra-platform aberto e ALLOWED_APPS configurado (aplicação autorizada no CAS)

## Worktree Config

- **story-slug**: integracao-sso-cas
- **branch-name**: story/integracao-sso-cas
- **base-branch**: main

## Test Strategy

- **unit-test-runner**: npm run test
- **e2e-required**: sim
- **coverage-threshold**: 80
- **test-paths**: tests/

## PR Config

- **draft**: true
- **base**: main
- **labels**: ["story/integracao-sso-cas", "feature", "auth", "sso"]

## Autonomy Blockers

- **Configuração do auth-proxy**: Detalhes específicos de configuração podem não estar documentados — consultar equipe de infra ou documentação do hub
- **Ticket #infra-platform**: Processo e tempo de aprovação desconhecidos — abrir ticket antecipadamente e acompanhar
- **Formato do token/sessão**: Como o auth-proxy retorna o token? (header, cookie, query param) — verificar documentação
- **User info endpoint**: Qual endpoint do auth-proxy retorna informações do usuário? — verificar documentação

## Technical Notes

- **Dependências**: Fase 2 (infraestrutura com auth-proxy), Fase 3 (frontend core com Header)
- **Pontos de integração**: 
  - CAS (Central Authentication Service)
  - Auth-proxy do hub
  - Cloud Run (deployment com auth-proxy habilitado)
  - Frontend (guards de rota, armazenamento de token)
- **Riscos**: 
  - Atraso na aprovação do ticket #infra-platform (ALTO impacto)
  - Documentação insuficiente do auth-proxy
  - Configuração incorreta pode bloquear acesso completamente
  - Fluxo de callback do CAS pode ser complexo
- **Referências**:
  - PRD: docs/planning/PRD.md (seção 7.1 Autenticação e Autorização)
  - Blueprint: docs/planning/blueprints/blueprint-AS1I-rendered.md (seção 4 SSO)
  - **SSO Provider**: CAS (INTERNAL_CAS)
  - **Auth-proxy**: Habilitado via enable_auth_proxy = true (tfvars)
  - **Ticket**: Abrir em #infra-platform para ALLOWED_APPS (pós-deploy)
  - **IMPORTANTE**: Abrir ticket #infra-platform ANTECIPADAMENTE para evitar atrasos
