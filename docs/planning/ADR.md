# ADR — {nome-do-projeto}

**Data de criação:** YYYY-MM-DD  
**Skill orquestradora:** esteira-condutora

---

## Estado Atual

**Lifecycle:** construcao
**Arquétipo:** AS1I
**Playbook:** AS1I-construcao.yaml
**Step atual:** roadmap
**Fase:** 3 completa - Roadmap e stories geradas, pronto para Fase 3.5 (Repo Setup)
**Modo:** AUTOMATION  
**GitHub actor:** am-esteira-helpe[bot]  
**Org:** A-M-App-Hub  
**Repositório:** A-M-App-Hub/painel-consulta-clientes  
**Status solução:** ACTIVE  
**Próxima ação:** Fase 3.5 - Repo Setup  
**Última atualização:** 2025-01-23 10:05

---

## Premissas e Mapeamento Inicial

- **Repositório**: `A-M-App-Hub/{repo-name}`
- **Topologia alvo**: {Minimal | Pattern_A} + INTERNAL_CAS
- **SSO**: CAS
- **Persistência**: {none | api_stateless}
- **Stack frontend**: {React | N/A}
- **Stack backend**: {FastAPI | N/A}
- **FinOps**: Desativado (v1)
- **PostHog**: Desativado (v1)

---

## Artefatos de Referência

| Artefato | Path | Preenchido por | Data |
|----------|------|----------------|------|
| Solution Brief | `docs/planning/solution-brief.yaml` | render-brief.sh | |
| PRD | `docs/planning/PRD.md` | doc-workshop | |
| Blueprint | `docs/planning/blueprints/blueprint-AS1I-rendered.md` | render-blueprint.sh | |
| Roadmap | `docs/planning/roadmap_equilibrado.md` | roadmap-engineer | 2025-01-23 |
| Board Jira | `docs/planning/board_jira.md` | roadmap-engineer | 2025-01-23 |
| Cards CSV | `docs/planning/cards_epico.csv` | roadmap-engineer | 2025-01-23 |
| Stories | `docs/planning/stories/*.md` | roadmap-engineer | 2025-01-23 |
| User Status | `docs/planning/user-status.md` | esteira-condutora | |

---

## Histórico de Fases

| Data | Hora | Transição | Observações |
|------|------|-----------|-------------|
| 2025-01-23 | 10:05 | Fase 3 completa | Roadmap equilibrado gerado, 6 stories criadas, board e CSV exportados |

---

## Notas para o Agente

- Recovery: ler **Estado Atual** + invocar `detect-entry.sh`
- Atualizar ADR após cada step via `adr.sh update`
