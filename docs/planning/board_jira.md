# Board Jira — Painel de Consulta de Clientes

## Épico: Painel de Consulta de Clientes

**Valor de negócio**: Interface centralizada para consultores A&M realizarem buscas rápidas de informações de clientes, eliminando dependência de planilhas e sistemas legados fragmentados.

**Métricas de sucesso**:
- Tempo médio de busca < 3 segundos
- Taxa de sucesso de buscas > 80%
- Adoção por 100% dos consultores A&M em 30 dias

**Critérios de aceite do Épico**:
- Aplicação acessível via hub em dev, qa e prod
- Autenticação CAS funcionando
- Busca de clientes retornando resultados mock
- Interface responsiva e aderente ao Design System
- Testes E2E cobrindo jornadas principais
- Pipeline CI/CD operacional

---

## Fases de Entrega

| # | Título da Fase | Descrição | Data início | Data fim | Status |
|---|----------------|-----------|-------------|----------|--------|
| 1 | Setup de Repositório e Estrutura Base | Configurar estrutura inicial do projeto, dependências, linters, testes e CI/CD básico | | | A Fazer |
| 2 | Provisionamento de Infraestrutura GCP | Provisionar projeto GCP, Cloud Run, configurar ambientes dev/qa/prod com OpenTofu | | | A Fazer |
| 3 | Desenvolvimento do Frontend Core | Implementar estrutura React, componentes base, roteamento e integração com Design System | | | A Fazer |
| 4 | Implementação de Funcionalidades de Busca | Desenvolver campo de busca, lógica de filtro, exibição de resultados e dados mock | | | A Fazer |
| 5 | Integração SSO com CAS | Configurar autenticação CAS via auth-proxy, validar fluxo de login e proteção de rotas | | | A Fazer |
| 6 | Testes E2E e Preparação para Produção | Implementar testes E2E, validar jornadas completas, documentar deploy e preparar release | | | A Fazer |

---

## Dependências entre Fases

- **Fase 2** depende de: Fase 1 (estrutura base)
- **Fase 3** depende de: Fase 2 (infra provisionada)
- **Fase 4** depende de: Fase 3 (frontend core)
- **Fase 5** depende de: Fase 2 (infra com auth-proxy), Fase 3 (frontend core)
- **Fase 6** depende de: Fase 4 (funcionalidades), Fase 5 (SSO)

---

## Status disponíveis (Scrum)

- A Fazer
- Em Progresso
- Em Revisão
- Concluído
- Cancelado

---

## Observações

- Board configurado para workflow Scrum
- Datas a serem acordadas entre PO e desenvolvedor
- Cada fase representa um bloco substancial de desenvolvimento adequado para workflows agenticos
- SEM subtasks ou stories no Jira (hierarquia de dois níveis: Épico → Fase)
