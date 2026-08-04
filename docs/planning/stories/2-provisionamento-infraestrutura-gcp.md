---
source_roadmap: roadmap_equilibrado.md
phase_index: 2
phase_title: "Provisionamento de Infraestrutura GCP"
epic_title: "Painel de Consulta de Clientes"
generated_at: "2025-01-23T10:00:00"
---

# Story: Provisionamento de Infraestrutura GCP

## Context

Provisionar a infraestrutura GCP necessária para hospedar a aplicação nos ambientes dev, qa e prod. Como arquétipo AS1I, a aplicação será hospedada no hub (A-M-App-Hub) usando topologia Minimal com FastAPI Mixed e auth-proxy para CAS.

**Objetivo**: Criar e configurar todos os recursos de infraestrutura necessários para deploy da aplicação.

**Limites de entrega**: Infraestrutura provisionada e validada em dev; ambientes qa e prod criados mas não necessariamente validados.

## Tasks

- [ ] Criar arquivos OpenTofu/Terraform para topologia Minimal
  - [ ] Configurar tfvars para dev (mixed_container_count=1, frontend_container_count=0, backend_container_count=0)
  - [ ] Configurar access_topology=internal_corp e access_pattern=INTERNAL_CAS
  - [ ] Habilitar auth-proxy (enable_auth_proxy=true, sso_provider=CAS)
- [ ] Provisionar projeto GCP para dev
  - [ ] Executar terraform apply para ambiente dev
  - [ ] Validar criação de Cloud Run service (mixed container)
  - [ ] Validar configuração de auth-proxy
- [ ] Replicar configuração para qa e prod
  - [ ] Criar tfvars para qa e prod
  - [ ] Provisionar ambientes qa e prod
- [ ] Configurar CI/CD pipeline (GitHub Actions)
  - [ ] Criar workflow de build do SPA
  - [ ] Criar workflow de deploy no hub via solution.manifest.yaml
  - [ ] Validar pipeline em dev
- [ ] Documentar processo de deploy
  - [ ] Atualizar README com instruções de deploy
  - [ ] Documentar variáveis de ambiente necessárias
  - [ ] Documentar processo de rollback

## Acceptance Criteria

- AC-2.1: Projeto GCP criado para dev com topologia Minimal
- AC-2.2: Cloud Run service (mixed container) provisionado e acessível
- AC-2.3: Auth-proxy configurado para CAS
- AC-2.4: Ambientes qa e prod provisionados
- AC-2.5: Pipeline CI/CD funcional (build + deploy)
- AC-2.6: Documentação de deploy completa e validada

## Worktree Config

- **story-slug**: provisionamento-infraestrutura-gcp
- **branch-name**: story/provisionamento-infraestrutura-gcp
- **base-branch**: main

## Test Strategy

- **unit-test-runner**: N/A (infra)
- **e2e-required**: nao
- **coverage-threshold**: N/A
- **test-paths**: N/A

## PR Config

- **draft**: true
- **base**: main
- **labels**: ["story/provisionamento-infraestrutura-gcp", "infra", "terraform"]

## Autonomy Blockers

- **Acesso GCP**: Credenciais e permissões para provisionar recursos GCP — verificar antes de iniciar
- **Configuração do hub**: Detalhes específicos de integração com A-M-App-Hub podem não estar documentados — consultar equipe de infra
- **Secrets e variáveis de ambiente**: Quais secrets são necessários e onde armazená-los (GitHub Secrets, Secret Manager)

## Technical Notes

- **Dependências**: Fase 1 (estrutura base deve estar pronta)
- **Pontos de integração**: 
  - GCP Cloud Run
  - A-M-App-Hub (hospedagem)
  - CAS auth-proxy
  - GitHub Actions (CI/CD)
- **Riscos**: 
  - Falta de documentação específica do hub
  - Permissões GCP insuficientes
  - Configuração incorreta do auth-proxy pode bloquear acesso
- **Referências**:
  - Blueprint: docs/planning/blueprints/blueprint-AS1I-rendered.md (seção 2 Arquitetura, seção 4 SSO)
  - PRD: docs/planning/PRD.md (seção 6.2 Infraestrutura GCP, seção 6.4 CI/CD)
  - Topologia: Minimal (webapp-topologies.md §2.1)
  - Acesso: INTERNAL_CAS (access-topologies.md §2.1)
  - **IMPORTANTE**: Arquétipo AS1I é hospedado no hub, NÃO requer módulos base_tf_generator
