# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação Web deverá permitir o cadastro de novos usuários | Maria Eduarda | index.html |
|RF-002| A aplicação fornecerá informações sobre os termos de uso | Francisco | cadastro-noticia.html |
|RF-003| A aplicação terá uma página que se apresente logo após o cadastro do usuário e pela qual esse deverá preencher um formulário  | Maria Eduarda | index.html |
|RF-004| A aplicação realizará a validação do usuário através de um e-mail de confirmação   | Diego | index.html |
|RF-005| A aplicação permitirá que o usuário logue no site com usuário e senha   | Diego | index.html |
|RF-006| A aplicação permitirá ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado   | Diego | index.html |
|RF-007| A aplicação deverá permitir que o usuário gerencie seu cadastro para exclusão, consulta e alteração  | Francisco | index.html |
|RF-008| A aplicação Web permitirá apenas aos usuários cadastrados criarem/alterarem/atualizarem seus cadastros dos seus animais domésticos disponíveis para adoção   | Pedro Valente | cadastropet.html // seuspets.html // editarpet.html |
|RF-009| A aplicação deverá permitir que as ONGs cadastrem seus eventos de adoção   | Kelly | cadastrodeeventos.html |
|RF-010| A aplicação permitirá a vizualização dos “pets" cadastrados e postados pelos doadores   | Pedro Valente | prontoadoção.html |
|RF-011| A aplicação deverá permitir a vizualização dos perfis dos possíveis tutores e também dos doadores   | Francisco | index.html |
|RF-012| A aplicação Web permitirá que os eventos cadastrados pelas ONGs sejam visualizados, pelo usuários, em uma página especial de destaque   | Kelly | agendadeeventos.html e saibamaiseventos.html|
|RF-013| A aplicação deverá permitir que as ONGs gerenciem seus anúncios de eventos de adoção   | Kelly | seuseventos.html |
|RF-014| A aplicação Web terá uma área na qual os usuários poderão postar fotos, com legendas, de seus "pets"   | Gustavo Gorges | index.html |
|RF-015| A aplicação Web deverá incorporar mecanismos de feedback para permitir que os usuários forneçam comentários sobre sua experiência   | Gustavo Gorges | index.html | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Responsável | Artefato Criado |
|-------|-------------------------|------------|-----------------|
|RNF-001| O site deve ser responsivo, ou seja, deve responder da maneira ideal e se adaptar, sem distorções, à resolução dos dispositivos móveis | Gustavo Gorges | index.html |
|RNF-002| A interface deve ser agradável, prática e de fácil utilização | Kelly | index.html |
|RNF-003| O sistema deve ser multiplataforma, possibilitando seu uso em dispositivos com sistema operacional Microsoft Windows, Linux ou MacOS | Maria Eduarda | index.html |
|RNF-004| O sistema deve garantir a segurança dos dados de acordo com A Lei Geral de Proteção de Dados Pessoais (Lei brasileira 13 709/2018) | Francisco | index.html |
|RNF-005| A aplicação deve enviar ao usuário um email para confirmação de cadastro | Diego | index.html |
|RNF-006| A aplicação Web oferecerá informações relevantes sobre abrigos e recursos locais através do mecanismo de localização geográfica | Kelly | agendadeeventos.html |
|RNF-007| A aplicação Web deverá ter um mecanismo de filtro, por Estado e porte, para facilitar a busca dos possíveis tutores pelo animal ideal  | Pedro Valente | prontoadoção.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

