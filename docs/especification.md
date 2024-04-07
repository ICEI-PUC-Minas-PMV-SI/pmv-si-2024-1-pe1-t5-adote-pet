# Especificações do Projeto

No Brasil, o **abandono de animais domésticos, mais conhecidos como “pets”, tem sido uma prática frequente na sociedade atual**. As ONGs e os protetores de animais são os que têm ajudado nessa missão de resgate e acolhimento do animal abandonado. Entretanto, ainda há um desafio para eles: devido à prática de abandono ser frequente, muitos órgãos estão com superlotação e, consequentemente, têm dificuldades para encontrar tutores responsáveis para a adoção dos pets. **O projeto pretende englobar tanto os órgãos de resgate** (ONGs, grupos de acolhimento e doadores) quanto os possíveis tutores para o animal.

Nessa parte do documento, vamos definir as personas envolvidas na possível solução, descrever as histórias do usuário e os requisitos.

## Personas
● **Possível tutor - João**
: João tem 30 anos e mora em um apartamento de tamanho médio na cidade. Ele trabalha como designer gráfico e passa a maior parte do seu tempo em casa ou em um co-working próximo. João cresceu em uma casa onde sempre havia animais de estimação e, agora, morando sozinho, sente falta da companhia de um pet. Ele é uma pessoa ativa, gosta de passear em parques nos fins de semana e deseja um companheiro para suas atividades ao ar livre. João nunca adotou um pet antes e está em busca de um processo de adoção que seja transparente e o ajude a encontrar um animal que se adapte ao seu estilo de vida.

● **ONG - Abrigo Projeto Meggie**
: O Abrigo Projeto Meggie é uma ONG fundada há 3 anos por um grupo de voluntários apaixonados por animais. Localizado na região metropolitana de uma grande cidade, o abrigo acolhe cães e gatos resgatados das ruas ou de situações de maus-tratos. A missão da ONG é reabilitar esses animais, tanto física quanto emocionalmente, e encontrar lares amorosos e responsáveis para eles. A organização enfrenta desafios com seus recursos limitados e tem a necessidade de aumentar sua visibilidade para atrair mais adotantes e diminuir a superpopulação. Eles buscam uma plataforma que facilite a gestão dos pets disponíveis para adoção e que ajude a contar as histórias de cada animal, aumentando assim as chances de adoção.

● **Pessoa que precisa doar seu pet - Maria**
: Maria tem 45 anos, é mãe de dois filhos pequenos e recentemente recebeu uma proposta de trabalho em outro país. A família está planejando a mudança nos próximos meses, mas, infelizmente, o pet da família, um Labrador de 5 anos chamado Thor, não poderá acompanhá-los devido a restrições de viagem e ao longo processo de quarentena exigido pelo país de destino. Maria está devastada com a ideia de deixar Thor para trás e está determinada a encontrar um novo lar amoroso para ele, onde possa ser feliz e bem cuidado. Ela busca uma plataforma que permita criar um perfil detalhado para Thor, destacando sua personalidade, necessidades e as melhores características para uma futura família adotiva.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Possível tutor, doador e ONG | Criar um perfil detalhado com minhas informações                                                             |Os outros usuarios possam me identificar e avaliar com facilidade |
|Possível tutor, doador e ONG |Logar no site com meu perfil                                                                                  |Realizar minhas atividades no sistema |
|Possível tutor, doador e ONG |Solicitar a mudança de senha                                                                                  |Permitir que seja possivel acessar a minha conta mesmo sem lembrar |
|Possível tutor, doador e ONG |Administrar meu perfil                                                                                        |Manter minhas informações atualizadas e corretas. |
|Doador                       |Cadastrar e administrar as informações do meu animal                                                          |Permitir que que os possíveis tutores possam visualizar e avaliar uma possivel adoção |
|Possível tutor, doador e ONG |Receber informações sobre os termos de uso da aplicação                                                       |Ter conhecimento sobre minhas responsabilidades, a forma de utilização, assim como esclarecer possíveis dúvidas que possa ter sobre o funcionamento do sistema|
|ONG                          |Publicar eventos e campanhas da organização                                                                   |Possíveis tutores possam visualizar e participar caso estejam interessados |
|Possivel tutor               |Pesquisar e visualizar os Pets disponiveis para adoção e suas informações, incluindo as informações do doador |Avaliar as opções e escolher qual irei adotar |
|Possivel tutor               |Poder entrar em contato com doadores                                                                          |Permitir discutir os detalhes e possiveis acordos sobre a adoção |
|Possivel tutor               |Avaliar e verificar as avaliações sobre possiveis doadores                                                    |Avaliar a adequação e a qualidade do mesmo |
|Doador                       |Avaliar e verificar as avaliações sobre possiveis tutores                                                     |Avaliar a adequação e a qualidade do mesmo |

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
|RNF-007| A aplicação Web oferecerá informações relevantes sobre abrigos e recursos locais através do mecanismo de localização geográfica | BAIXA |
|RNF-008| A aplicação Web deverá incorporar mecanismos de feedback para permitir que os usuários forneçam comentários sobre sua experiência | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deverá ser desenvolvido em HMTL, CSS e JavaScrip.            |
|04| Não deve haver transações monetárias dentro do site. |

