> [!IMPORTANT]
> Status do Projeto: Em desenvolvimento inicial (Pre-alpha).

# Progressium - 0.0.0

> O Progressium é uma plataforma de trackers para gerenciamento de progresso em videogames. O objetivo é centralizar requisitos de 100% (Completionism), desafios de comunidade (Challenge Runs) e suporte ao RetroAchievements.

**Acesse nosso site em:** [Link ainda não disponível]

**Contador de Trackers:**

- `0x` 🏆 Completionist
- `0x` 👾 [Retro Achievements](https://retroachievements.org)
- `0x` ⚔️ Challenge Runs
- `0x` 🏅 Achievement Hunting

## Sobre o Projeto

### Contexto

Quando estamos tentando atingir os 100% de um jogo, completá-lo ou coletar todas as suas conquistas, é comum perdermos horas procurando todos os pré-requisitos necessários. Esta aplicação foi desenvolvida para resolver esse problema. Com o **Progressium**, podemos concentrar diversos trackers em um só lugar, diminuindo a busca incessante por informações e oferecendo um sistema dinâmico para marcar e visualizar o progresso até o objetivo final.

O projeto também visa o desenvolvimento em comunidade, para que novos usuários possam criar seus próprios trackers e temas, tornando o ecossistema cada vez mais completo. Além disso, buscamos sugestões para a elaboração de novos componentes úteis aos trackers.

> [!WARNING]
> Infelizmente, até o momento, ainda não disponibilizamos essa funcionalidade. Assim que terminarmos a elaboração do sistema básico, publicaremos uma documentação para que a comunidade possa adicionar seus próprios trackers. Para acompanhar o desenvolvimento, verifique nosso Roadmap ou a página de Issues.

### Público-Alvo

- Jogadores que desejam finalizar jogos em 100%.
- Pessoas que querem registrar seu progresso em desafios específicos.
- Completionists.
- Achievement Hunters.

### Fluxo de Utilização

[ Ainda em Desenvolvimento ]

---

## Parte Técnica

### Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS

### Arquitetura: Feature Base

A arquitetura escolhida será a Feature Base, visto que sua distribuição por funcionalidades faz sentido em uma aplicação cuja ideia principal é a criação de items. Dessa forma, a organização por Features facilitará a manutenção e a adição de novos serviços.

### Padrão de Design: Page - Feature - UI

Juntamente com a arquitetura Feature Base, utilizaremos o Design: Page - Feature - UI para definir a responsabilidade de cada camada:

- **Page**: Responsável por montar as páginas com seus respectivos componentes.
- **Features**: Responsável pelo controle e lógica.
- **UI**: Responsável única e exclusivamente pela exibição.

Esta abordagem evitará a reconstrução constante do front-end ou adaptações desnecessárias. A lógica dentro da UI será limitada apenas ao que contribui para a interface.

### Estrutura de Pastas

```bash
app/
  ├── features/ # Funcionalidades da aplicação
  ├── styles/   # Configuração e variáveis de temas
data/           # Lista com todas as estruturas de trackers disponíveis em YAML
```

### Roadmap

Nosso Roadmap está detalhado na página de Issues, onde listamos as necessidades da comunidade e organizamos as tarefas prioritárias.

## Contribuição

Todas as contribuições devem ser abertas na página de Issues, utilizando as tags respectivas e seguindo os modelos abaixo. Cada sugestão será avaliada pela equipe para posterior inclusão no Roadmap. Respeite as regras de cada categoria e siga os padrões:

### New Features

```

## 📝 Visão Geral
## 🛠️ Especificação Técnica
- **Arquitetura**: [Ex: Service Pattern / Hook Customizado]
- **Dependências**: [Novas libs ou componentes existentes]

## 🏗️ Progresso da Implementação (To-Do)
- [ ] Pesquisa e PoC de viabilidade
- [ ] Estruturação de Schema/Interfaces
- [ ] Lógica de Negócio (Services/Handlers)
- [ ] Integração com UI
- [ ] Testes Unitários

## ✅ Critérios de Aceitação
- [ ] [Critério 1]
- [ ] [Critério 2]
```

### Bugs

```
## 🐞 Descrição do Erro
## 🕹️ Passos para Reproduzir
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Erro apresentado: [Print ou Log]

## 🔍 Análise Técnica (Causa Raiz)
- **Onde ocorre**: [Ex: No mapeamento do Array X]
- **Por que ocorre**: [Ex: Variável nula ao trocar de aba]

## 🛠️ Proposta de Correção
- [ ] Adicionar Early Return para valores nulos.
- [ ] Implementar Error Boundary no container.

## 📌 Contexto Adicional
- **Browser/Ambiente**: Chrome / Mobile
- **Versão/Milestone**: #000
```

### Componentes

```
## 🧩 Definição do Componente
## 🎨 Especificações Visuais
- **Contexto de Uso**: [Ex: Sidebar de Filtros / Main Dashboard]
- **Variantes**: [Ex: Primary, Secondary, Glassmorphism]

## ⚙️ Contrato de Dados (Props/Interface)
- `data`: Array de objetos [descrição]
- `isLoading`: Boolean
- `theme`: 'Dark' | 'Light'

## 📋 Casos de Uso (Exemplos)
- [ ] Exemplo 1: Exibição de progresso mensal.
- [ ] Exemplo 2: Comparativo de conquistas por plataforma.

## 🛠️ Requisitos Técnicos
- [ ] Responsividade (Grid System)
- [ ] Suporte a Tooltips
- [ ] Skeleton Load state
```

### Temas

```
## 🎨 Cadastro de Tema / Requisitos Visuais
- **Nome do Tema**: [Ex: Midnight Dashboard]
- **Referência/Inspiração**: [Link ou Imagem]

## 📝 Requisitos de Estilo
- [ ] **Paleta de Cores**: Primária (#...), Secundária (#...), Background (#...)
- [ ] **Tipografia**: [Fonte principal / Pesos]
- [ ] **Tokens**: [Bordas arredondadas, sombras, opacidade]

## 🛠️ Checklist de Implementação
- [ ] Mapeamento de variáveis CSS/SASS
- [ ] Teste de contraste (Acessibilidade)
- [ ] Aplicação no ThemeProvider
```

### Contribuir com Código

As contribuições de código ainda não estão abertas. Estamos finalizando a estruturação interna para que todos possam colaborar em breve. Agradecemos a paciência.

<p align="center">
Desenvolvido com ❤️ por <strong>Igor Mendes</strong><br>
<a href="https://www.youtube.com/@PlatinumPaz">PlatinumPaz</a><br>
<sub>© 2024 - Presente</sub>
</p>
