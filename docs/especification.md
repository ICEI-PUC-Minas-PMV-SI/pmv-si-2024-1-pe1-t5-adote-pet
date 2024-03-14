# Especificações do Projeto

No Brasil, o abandono de animais domésticos, mais conhecidos como “pets”, tem sido uma prática frequente na sociedade atual. As ONGs e os protetores de animais são os que têm ajudado nessa missão de resgate e acolhimento do animal abandonado. Entretanto, ainda há um desafio para eles: devido à prática de abandono ser frequente, muitos órgãos estão com superlotação e, consequentemente, têm dificuldades para encontrar tutores responsáveis para a adoção dos pets. O projeto pretende englobar tanto os órgãos de resgate (ONGs, grupos de acolhimento e doadores) quanto os possíveis tutores para o animal.

Nessa parte do documento, vamos definir as personas envolvidas na possível solução, descrever as histórias do usuário e os requisitos.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação Web deverá permitir o cadastro de novos usuários | ALTA |  
|RF-002| A aplicação fornecerá informações sobre os termos de uso   | MÉDIA | 
|RF-003| A aplicação terá uma página que se apresente logo após o cadastro do usuário e pela qual esse deverá preencher um formulário  | MÉDIA | 
|RF-004| A aplicação realizará a validação do usuário através de um e-mail de confirmação   | MÉDIA | 
|RF-005| A aplicação permitirá que o usuário logue no site com usuário e senha   | ALTA | 
|RF-006| A aplicação permitirá ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado   | MÉDIA | 
|RF-007| A aplicação deverá permitir que o usuário gerencie seu cadastro para exclusão, consulta e alteração  | ALTA | 
|RF-008| A aplicação Web permitirá apenas aos usuários cadastrados criarem/alterarem/atualizarem seus cadastros dos seus animais domésticos disponíveis para adoção   | ALTA | 
|RF-009| A aplicação deverá permitir que as ONGs cadastrem seus eventos de adoção em uma página especial de destaque   | MÉDIA | 
|RF-010| A aplicação permitirá a vizualização dos “pets" cadastrados e postados pelos doadores   | ALTA | 
|RF-011| A aplicação deverá permitir a vizualização dos perfis dos possíveis tutores e também dos doadores   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo, ou seja, deve responder da maneira ideal e se adaptar, sem distorções, à resolução dos dispositivos móveis |  MÉDIA | 
|RNF-002| A interface deve ser agradável, prática e de fácil utilização |  ALTA | 
|RNF-003| O sistema deve ser multiplataforma, possibilitando seu uso em dispositivos com sistema operacional Microsoft Windows, Linux ou MacOS | ALTA |
|RNF-004| O sistema deve garantir a segurança dos dados de acordo com A Lei Geral de Proteção de Dados Pessoais (Lei brasileira 13 709/2018) | MÉDIA |
|RNF-005| A aplicação deve enviar ao usuário um email para confirmação de cadastro | BAIXA |
|RNF-006| A aplicação Web deverá ter um botão de "voltar ao topo" em páginas de conteúdo extenso | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
