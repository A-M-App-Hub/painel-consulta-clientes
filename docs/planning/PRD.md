# PRD — Painel de Consulta de Clientes

## Metadados do Projeto

| Campo | Valor |
|-------|-------|
| **Nome do Projeto** | Painel de Consulta de Clientes |
| **Repositório** | `painel-consulta-clientes` |
| **Data de Criação** | 2025-01-23 |
| **Status** | Em construção |
| **Responsável (PO)** | A definir |
| **Stakeholders** | Consultores A&M, Digital & AI |
| **Prazo MVP** | A definir |
| **Arquétipo** | AS1I (Front interno hub-hosted, CAS, sem persistência) |
| **Business Unity** | Digital & AI |
| **Categoria** | Aplicações WEB |
| **Lifecycle** | construção |
| **Links relevantes** | [solution-brief.yaml](./solution-brief.yaml) |

---

## PARTE A — PRODUTO

## 1. Visão Geral

### 1.1 Resumo Executivo

O **Painel de Consulta de Clientes** é uma aplicação web interna para consultores A&M realizarem buscas rápidas de informações de clientes. A solução é um front-end simples hospedado no hub, com autenticação via CAS e dados mock/estáticos (sem persistência própria), seguindo o arquétipo AS1I.

### 1.2 Problema

Consultores A&M precisam de uma interface centralizada e intuitiva para consultar informações de clientes de forma rápida e eficiente, sem depender de planilhas ou sistemas legados fragmentados.

### 1.3 Proposta de Valor

- **Acesso rápido**: Interface web responsiva com busca instantânea
- **Simplicidade**: Foco em consulta, sem complexidade de edição ou gestão
- **Segurança**: Autenticação via CAS, acesso restrito a usuários internos
- **Baixo custo**: Sem infraestrutura própria, hospedado no hub

### 1.4 Usuários-Alvo

| Persona | Descrição | Necessidades |
|---------|-----------|--------------|
| **Consultor A&M** | Profissional interno que precisa consultar dados de clientes para análises e atendimento | Busca rápida, interface intuitiva, dados confiáveis |

---

## 2. Escopo e Features

### 2.1 Features do MVP

| ID | Feature | Descrição | Prioridade |
|----|---------|-----------|------------|
| F01 | Campo de busca | Input para buscar clientes por nome, ID ou outros critérios | Alta |
| F02 | Exibição de resultados | Lista/tabela com resultados da busca, exibindo informações relevantes do cliente | Alta |
| F03 | Botão limpar busca | Botão para resetar o campo de busca e limpar os resultados exibidos | Alta |

### 2.2 Fora do Escopo (MVP)

- Edição ou criação de registros de clientes
- Persistência de dados (dados são mock/estáticos)
- Exportação de relatórios
- Histórico de buscas
- Integração com sistemas externos (CRM, ERP)
- Filtros avançados ou busca por múltiplos critérios simultaneamente

---

## 3. Jornadas de Usuário

### 3.1 Personas Detalhadas

#### Consultor A&M

- **Objetivo**: Consultar informações de clientes rapidamente
- **Contexto de uso**: Durante atendimento, análise ou preparação de relatórios
- **Frequência de uso**: Diária
- **Dispositivos**: Desktop (principal), tablet (secundário)
- **Nível técnico**: Intermediário

### 3.2 Fluxos Principais

#### Fluxo 1: Buscar Cliente

**Ator**: Consultor A&M  
**Pré-condição**: Usuário autenticado via CAS

| Passo | Ação do Usuário | Resposta do Sistema |
|-------|-----------------|---------------------|
| 1 | Acessa o painel | Exibe tela principal com campo de busca vazio |
| 2 | Digita termo de busca (ex.: nome do cliente) | Campo aceita entrada de texto |
| 3 | Pressiona Enter ou clica em "Buscar" | Sistema filtra dados mock e exibe resultados em tabela/lista |
| 4 | Visualiza resultados | Exibe informações do(s) cliente(s) encontrado(s) |
| 5 | (Opcional) Clica em "Limpar busca" | Sistema limpa campo e resultados, volta ao estado inicial |

**Regras de Negócio**:
- Busca deve ser case-insensitive
- Busca vazia não retorna resultados
- Se nenhum cliente for encontrado, exibir mensagem "Nenhum cliente encontrado"

**Tratamento de Erros**:
- **Erro de busca**: Exibir mensagem de erro amigável
- **Sem resultados**: Exibir estado vazio com mensagem orientativa

---

## 4. Métricas e KPIs

### 4.1 KPIs de Negócio

| KPI | Descrição | Meta | Frequência de Medição |
|-----|-----------|------|----------------------|
| Taxa de adoção | % de consultores que usam o painel regularmente | >70% em 3 meses | Mensal |
| Tempo médio de busca | Tempo entre digitar e visualizar resultados | <2 segundos | Semanal |

### 4.2 KPIs de Produto

| KPI | Descrição | Meta | Frequência de Medição |
|-----|-----------|------|----------------------|
| Número de buscas/dia | Quantidade de buscas realizadas por dia | >50 buscas/dia | Diária |
| Taxa de sucesso de busca | % de buscas que retornam resultados | >80% | Semanal |

---

## 5. Backlog Futuro (Pós-MVP)

| Feature | Descrição | Prioridade | Estimativa |
|---------|-----------|------------|------------|
| Filtros avançados | Busca por múltiplos critérios (região, segmento, status) | Média | Sprint +2 |
| Exportação CSV | Exportar resultados de busca para CSV | Baixa | Sprint +3 |
| Histórico de buscas | Salvar últimas buscas do usuário (localStorage) | Baixa | Sprint +3 |
| Detalhes do cliente | Modal/página com informações completas do cliente | Média | Sprint +2 |
| Integração com CRM | Buscar dados reais de sistema externo | Alta | Sprint +4 |

---

## PARTE B — DIRECIONAMENTO TÉCNICO ESSENCIAL

## 6. Plataforma e Infraestrutura

### 6.1 Stack Técnico

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| **Frontend** | React 18+ ou Vue 3+ | SPA moderna, conformidade com hub |
| **Build** | Vite ou Create React App | Padrão para SPAs |
| **Estilização** | Tailwind CSS + Design System | Conformidade obrigatória com Design System |
| **Hospedagem** | Hub A-M-App-Hub | Arquétipo AS1I (hub-hosted) |
| **Dados** | Mock/estático (JSON local ou hardcoded) | AS1I não tem persistência |
| **Autenticação** | CAS (via auth-proxy do hub) | Padrão hub para autenticação interna |

### 6.2 Infraestrutura GCP e OpenTofu

**NÃO APLICÁVEL** — Arquétipo AS1I é hospedado no hub (`A-M-App-Hub/app-space-infra`). Não há provisionamento de projeto GCP próprio, Cloud Run ou módulos `base_tf_generator`.

### 6.3 Ambientes

| Ambiente | Descrição | URL (exemplo) |
|----------|-----------|---------------|
| **dev (d)** | Desenvolvimento | `https://hub-dev.example.com/painel-consulta-clientes` |
| **qa (q)** | Homologação/QA | `https://hub-qa.example.com/painel-consulta-clientes` |
| **prod (p)** | Produção | `https://hub.example.com/painel-consulta-clientes` |

### 6.4 CI/CD

**Pipeline**: GitHub Actions (padrão hub)  
**Estratégia**: Build do SPA → Deploy no hub via `solution.manifest.yaml`

### 6.5 FinOps

**NÃO APLICÁVEL** — Arquétipo AS1I hospedado no hub não requer charge code ou orçamento próprio.

---

## 7. Requisitos de Acesso e Segurança

### 7.1 Autenticação e Autorização

| Campo | Valor |
|-------|-------|
| **Método de autenticação** | CAS (Central Authentication Service) via auth-proxy do hub |
| **Provedor** | Hub A-M-App-Hub (INTERNAL_CAS) |
| **Exposição** | Interna (apenas usuários autenticados) |
| **Perfis de acesso** | Consultor A&M (acesso total de leitura) |

### 7.2 Perfis de Usuário e Permissões

| Perfil | Descrição | Permissões |
|--------|-----------|------------|
| **Consultor A&M** | Usuário padrão | Buscar clientes, visualizar resultados |

### 7.3 Compliance e Auditoria

| Requisito | Valor |
|-----------|-------|
| **LGPD/GDPR** | Dados mock (sem dados pessoais reais no MVP) |
| **Auditoria de acesso** | Logs gerenciados pelo hub |
| **Retenção de logs** | Conforme política do hub |

---

## 8. Requisitos Funcionais Detalhados

### 8.1 Modelo de Dados

#### Estrutura de Cliente (mock)

```json
{
  "id": "string (UUID)",
  "nome": "string",
  "cpf_cnpj": "string (mascarado)",
  "email": "string",
  "telefone": "string",
  "segmento": "string",
  "status": "string (Ativo | Inativo)"
}
```

**Fonte de dados (MVP)**: Arquivo JSON estático ou array hardcoded no frontend.

### 8.2 Telas e Componentes

#### Tela Principal: Busca de Clientes

| Elemento | Descrição | Componente do Design System |
|----------|-----------|----------------------------|
| **Header** | Topbar com logo e nome do usuário | Topbar (Design System) |
| **Campo de busca** | Input de texto com placeholder "Buscar cliente..." | Input (Design System) |
| **Botão Buscar** | Botão primary para executar busca | Button Primary (Design System) |
| **Botão Limpar** | Botão secondary para limpar busca | Button Secondary (Design System) |
| **Tabela de resultados** | Exibe resultados com colunas: Nome, CPF/CNPJ, Email, Telefone, Segmento, Status | Table (Design System) |
| **Estado vazio** | Mensagem "Nenhum cliente encontrado" quando busca não retorna resultados | Empty State (Design System) |
| **Skeleton loader** | Exibido durante busca (se houver delay simulado) | Skeleton Loader (Design System) |

### 8.3 APIs e Integrações

**NÃO APLICÁVEL** — MVP usa dados mock locais. Não há APIs externas ou backend próprio.

### 8.4 Exportações e Relatórios

**NÃO APLICÁVEL** — Fora do escopo do MVP.

### 8.5 Notificações

**NÃO APLICÁVEL** — MVP não requer notificações.

### 8.6 Performance e Latência

| Requisito | Valor |
|-----------|-------|
| **Tempo de resposta da busca** | <500ms (dados mock locais) |
| **Tempo de carregamento inicial** | <2s (SPA) |
| **Suporte a volume** | Até 1000 registros mock sem degradação |

---

## 9. Design System e UI/UX

### 9.1 Conformidade com Design System

| Campo | Valor |
|-------|-------|
| **Conformidade com Design System** | **OBRIGATÓRIO** — seguir `boas_praticas_e_conhecimentos/biblioteca_de_agent_skills/esteira_de_desenvolvimento/references/design-system.md` |
| Desvios justificados | Nenhum |
| Protótipo visual (link) | A definir |
| Status do protótipo | A definir |

### 9.2 Componentes Necessários

- [x] Botões (Primary, Secondary)
- [x] Inputs e Campos de Formulário
- [ ] Cards
- [x] Tabelas (com busca)
- [x] Header (Topbar)
- [ ] Modais e Dialogs
- [ ] Notificações (Toast/Snackbar)
- [ ] Badges e Tags
- [x] Skeleton Loaders e estados vazios/erro
- [ ] Formulários
- [ ] Paginação

### 9.3 Responsividade

| Requisito | Valor |
|-----------|-------|
| Suporte mobile | Sim (secundário) |
| Suporte tablet | Sim |
| Suporte desktop | Sim (principal) |
| Prioridade de otimização | Desktop-first |

---

## 10. Riscos e Dependências

### 10.1 Riscos Principais

| Risco | Impacto | Probabilidade | Mitigação | Responsável |
|-------|---------|---------------|-----------|-------------|
| Dados mock não refletem cenários reais | Médio | Alta | Validar estrutura com stakeholders antes do MVP | PO |
| Atraso na configuração do hub | Alto | Baixa | Seguir documentação do hub e solicitar suporte cedo | Tech Lead |
| Baixa adoção pelos consultores | Médio | Média | Realizar sessão de onboarding e coletar feedback | PO |

### 10.2 Dependências

| Dependência | Tipo | Prazo esperado | Impacto no cronograma |
|-------------|------|----------------|----------------------|
| Configuração do hub (manifest) | Interna | Sprint 1 | Bloqueante |
| Aprovação do Design System | Interna | Sprint 1 | Bloqueante |
| Definição de dados mock | Interna | Sprint 1 | Bloqueante |

---

## 11. Aprovação

| Área | Responsável | Status | Data |
|------|------------|--------|------|
| Produto/PO | A definir | ( ) Aprovado ( ) Pendente | |
| UX/UI | A definir | ( ) Aprovado ( ) Pendente | |
| Tech Lead | A definir | ( ) Aprovado ( ) Pendente | |
| Negócio/Stakeholder | Digital & AI | ( ) Aprovado ( ) Pendente | |

**Resultado final:** ( ) Aprovado para desenvolvimento ( ) Aprovado com ressalvas ( ) Reprovado

**Condições para seguir (se houver):**

**Data da decisão:**
