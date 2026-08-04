# Solution Roadmap — Painel de Consulta de Clientes

## 1. Context

### 1.1 Document objective

Este roadmap define a sequência de entregas para o Painel de Consulta de Clientes.

### 1.2 References

* PRD: docs/planning/PRD.md
* Blueprint: docs/planning/blueprints/blueprint-AS1I-rendered.md

### 1.3 Roadmap scope

* Horizonte: MVP Release 1.0
* Ambientes: dev, qa, prod
* Restrições: Arquétipo AS1I sem persistência

---

## 2. Fases de entrega

### Fase 1: Setup de Repositório e Estrutura Base

**Descrição**: Configurar estrutura inicial do projeto com SPA React, build com Vite/bun, estrutura de pastas e configuração de CI/CD básico.

**Critérios de aceite**:
- Repositório configurado com estrutura de pastas padrão
- package.json com dependências base (React, Vite, Tailwind CSS)
- Scripts de build e dev funcionando
- README.md com instruções de setup
- GitHub Actions configurado para build

**Dependências**: Nenhuma

**Critérios de prontidão**: Repositório criado, acesso configurado

---

### Fase 2: Configuração de Dados Mock

**Descrição**: Criar dataset mock de clientes em JSON local, implementar serviço de dados mock e definir interface de dados.

**Critérios de aceite**:
- Arquivo JSON com pelo menos 20 clientes mock
- Serviço/hook para buscar dados mock
- Interface TypeScript definida para Cliente
- Dados incluem: id, nome, email, telefone, empresa, status

**Dependências**: Fase 1

**Critérios de prontidão**: Estrutura base do projeto concluída

---

### Fase 3: Desenvolvimento do Frontend Core

**Descrição**: Implementar componentes principais da UI: campo de busca, lista/tabela de resultados, botão de limpar, layout responsivo.

**Critérios de aceite**:
- Campo de busca funcional com debounce
- Exibição de resultados em cards ou tabela
- Botão de limpar busca funcional
- Layout responsivo (mobile e desktop)
- Componentes seguem Design System do hub
- Estados de loading e vazio tratados

**Dependências**: Fase 2

**Critérios de prontidão**: Dados mock disponíveis

---

### Fase 4: Lógica de Busca e Filtros

**Descrição**: Implementar lógica de busca por nome, ID ou outros campos, com filtros básicos e ordenação.

**Critérios de aceite**:
- Busca funciona por nome (case-insensitive)
- Busca funciona por ID
- Busca funciona por email
- Resultados ordenados por relevância
- Performance adequada (busca instantânea)

**Dependências**: Fase 3

**Critérios de prontidão**: Frontend core implementado

---

### Fase 5: Integração CAS e Deploy no Hub

**Descrição**: Configurar autenticação CAS via auth-proxy do hub, criar solution.manifest.yaml, configurar deploy no hub.

**Critérios de aceite**:
- solution.manifest.yaml configurado corretamente
- Auth-proxy CAS configurado
- Deploy no ambiente dev funcional
- Acesso via URL do hub funcional
- Redirecionamento CAS funcionando
- Ticket #infra-platform aberto para ALLOWED_APPS

**Dependências**: Fase 4

**Critérios de prontidão**: Aplicação funcional localmente

**Dependências externas**: Liberação de acesso CAS pela equipe de infra

---

### Fase 6: Testes, QA e Deploy em Produção

**Descrição**: Testes unitários e E2E, validação de QA, correção de bugs, deploy em qa e prod.

**Critérios de aceite**:
- Testes unitários com cobertura maior que 80%
- Testes E2E para fluxo principal de busca
- QA aprovado em ambiente qa
- Deploy em prod realizado
- Documentação de usuário disponível
- Monitoramento básico configurado

**Dependências**: Fase 5

**Critérios de prontidão**: Deploy em dev aprovado, acesso CAS liberado

---

## 3. Dependencies

### 3.1 Internal dependencies

| Item | Depends on |
|------|------------|
| Fase 2 | Fase 1 |
| Fase 3 | Fase 2 |
| Fase 4 | Fase 3 |
| Fase 5 | Fase 4 |
| Fase 6 | Fase 5 |

### 3.2 External dependencies

| Item | Owner | Impact |
|------|-------|--------|
| Liberação acesso CAS | Equipe infra-platform | Bloqueador para Fase 6 |
| Documentação Design System hub | Equipe hub | Necessário para Fase 3 |

### 3.3 Critical path

Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 6

Caminho crítico é sequencial. Fase 5 depende de aprovação externa (CAS).

---

## 4. Execution governance

### 4.1 Ceremonies

* Backlog refinement: Semanal
* Sprint planning: A cada início de fase
* Daily sync: Conforme necessário
* Review: Ao final de cada fase
* Retrospective: Ao final do MVP

### 4.2 Monitoring

* Progress tracking: GitHub Projects
* Delivery completion rate: Semanal
* Burndown: Por fase
* Lead time: Por fase
* Cycle time: Por fase

### 4.3 Roadmap revision policy

* Review frequency: Quinzenal ou sob demanda
* Triggers: Mudança de requisitos, bloqueios externos, riscos críticos
* Change control: Aprovação do PO + atualização versionada

---

## 5. Risks and mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Atraso CAS | Alto | Média | Abrir ticket antecipadamente |
| Mudança requisitos | Médio | Média | Validação frequente |
| Incompatibilidade Design System | Médio | Baixa | Consultar documentação cedo |
| Dados mock insuficientes | Baixo | Baixa | Dataset robusto na Fase 2 |

---

## 6. Version history

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-23 | roadmap-engineer | Roadmap inicial Equilibrado |
