# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Cadastrando PEt**
 :--------------: | ------------
**Procedimento**  | 1)Preencha todo o formulário com as informações do seu animal.
**Requisitos associados** | RF-008
**Resultado esperado** | Ser redireciado para a página "Meus Pets" com o animal já cadastrado.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Editando informações do PET**
 :--------------: | ------------
**Procedimento**  | 1) Na página "Meus Pets" entre em "Editar". <br> 2) Altere no formulário alguma das informações. 
**Requisitos associados** | RF-008
**Resultado esperado** | Atualizar o campo alterado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Excluindo PET cadastrado**
 :--------------: | ------------
**Procedimento**  | 1) Na página "Meus Pets" aperte o botão com um "X".
**Requisitos associados** | RF-008
**Resultado esperado** | Apagar o pet alterado
**Dados de entrada** | n/a
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Filtrar PET para adoção**
 :--------------: | ------------
**Procedimento**  | 1) Pesquise um termo condizente a um dos campos do PET.
**Requisitos associados** | RNF-007
**Resultado esperado** | Apresentar o card apenas dos pets cadastrados com esse termo
**Dados de entrada** | n/a
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Permitir cadastro de novos usuários**
 :--------------: | ------------
**Procedimento**  | 1) Na página "home" entre em "Cadastre-se". <br> 2) Coloque suas informações pessoais. <br> 3) Marque a opção que você concorda com os termos de uso. <br> 4) Caso você seja um doador ou uma ONG clique em "Cadastrar"; Caso seja um tutor, clique na opção "Ir para Formulário".
**Requisitos associados** | RF-001
**Resultado esperado** | Caso você seja um doador ou uma ONG, será direcionado para a página de "meu perfil"; Caso seja um tutor, será redirecionado para o formulário obrigatório para tutores.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - O tutor deverá preencher um formulário**
 :--------------: | ------------
**Procedimento**  | 1) Assim que o tutor clicar em "ir para formulário" na página de cadastro ele deverá: colocar as irformações pedidas. <br> 2) Apertar em "Salvar formulário".
**Requisitos associados** | RF-003
**Resultado esperado** | O tutor será redirecionado à página "meu perfil"
**Dados de entrada** | Inserção de dados válidos no formulário do tutor.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - A aplicação Web deverá incorporar mecanismos de feedback para permitir que os usuários forneçam comentários sobre sua experiência**
 :--------------: | ------------
**Procedimento**  | 1) Na parte inferior da home, o usuário pode digitar seu e-mail e sua mensagem desejada, e clicando em "Enviar" será redirecionado para o gmail.
**Requisitos associados** | RF-015
**Resultado esperado** | O tutor será redirecionado ao gmail para término do envio do e-mail.
**Dados de entrada** | Inserção do email e do corpo da mensagem ainda no site.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - A aplicação deverá permitir que as ONGs cadastrem seus eventos de adoção**
 :--------------: | ------------
**Procedimento**  | 1) Na página "Seus Eventos" clique no botão "Mais" (+). <br> 2) Preencha todos os campos com as informações do evento. <br> 3) Clique em "Cadastrar".
**Requisitos associados** | RF-009
**Resultado esperado** | Após clicar no botão "Cadastrar", o evento será cadastrado e o usuário será direcionado à página de "Seus Eventos".
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Eventos cadastrados pelas ONGs poderão ser visualizados, pelo usuários, em uma página especial de destaque**
 :--------------: | ------------
**Procedimento**  | 1) Após efetuado o cadastro ou login do usuário, clique em "Eventos" localizado no cabeçalho. <br> 2) O usuário poderá visualizar todos os eventos cadastrados.
**Requisitos associados** | RF-012
**Resultado esperado** | Após clicar no botão "Eventos", o usuário será direcionado à página "Agenda de Eventos" e poderá visualizar todos os eventos cadastrados.
**Dados de entrada** | n/a.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - As ONGs poderão gerenciar seus anúncios de eventos de adoção**
 :--------------: | ------------
**Procedimento**  | 1) Após efetuado o cadastro ou login da conta, as ONGs serão direcionadas à página "Seus Eventos". <br> 2) Assim que efetuado o cadastro de pelo menos um evento de adoção, as ONGs poderão visualizar, adicionar (cadastrar) ou excluir seus eventos.
**Requisitos associados** | RF-013
**Resultado esperado** | Após cadastrar um evento de adoção, o usuário poderá gerenciar seu evento cadastrado.
**Dados de entrada** | n/a.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Os eventos poderão ser filtrados por sua localização geográfica**
 :--------------: | ------------
**Procedimento**  | 1) Após efetuado o cadastro ou login do usuário, clique em "Eventos" localizado no cabeçalho. <br> 2) Na barra de pesquisa, coloque um termo condizente ao campo "localização" de um evento de adoção cadastrado. <br> 2) Assim, filtre até encontrar o evento desejado.
**Requisitos associados** | RNF-006
**Resultado esperado** | Após clicar no botão "Eventos", o usuário será direcionado à página "Agenda de Eventos" e poderá filtrar através da barra de pesquisa, por localização, todos os eventos cadastrados.
**Dados de entrada** | n/a.
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Cadastrando PET*                                         |
|---|---|
|Requisito Associado | RF-008 - A aplicação Web permitirá aos usuários criarem cadastros dos seus animais domésticos disponíveis para adoção|
|Link do vídeo do teste realizado: | https://www.loom.com/share/263c656e84a24d2dbcc3a92290e4a0fe?sid=a4d518dc-01b5-4ba9-b417-7b0b9da67948| 

|*Caso de Teste*                                 |*CT02 - Editando informações do PET*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação Web permitirá aos usuários alterarem cadastros dos seus animais domésticos disponíveis para adoçã|
|Link do vídeo do teste realizado: | https://www.loom.com/share/2172bd7cca75474680d81577f0151b0d?sid=0e9b9508-481f-4eae-ab9c-940ee4b751f5 |

|*Caso de Teste*                                 |*CT03 - Excluindo PET cadastrado*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação Web permitirá aos usuários apagarem cadastros dos seus animais domésticos disponíveis para adoçã|
|Link do vídeo do teste realizado: | https://www.loom.com/share/4ab8635db90a4694b0238946cd180556?sid=048439e6-b9f0-4792-8cb3-ca816f9ff194 |

|*Caso de Teste*                                 |*CT04 - Filtrar PET para adoção*                                        |
|---|---|
|Requisito Associado | RNF-007 - A aplicação Web deverá ter um mecanismo de filtro para facilitar a busca dos possíveis tutores pelo animal ideal|
|Link do vídeo do teste realizado: | https://www.loom.com/share/b7e93464e9b942d3b449cc542909c24d?sid=3f268f0a-9fc8-4cf7-9e15-3c63f879490f |

|*Caso de Teste*                                 |*CT05 - Upload de imagem para o Mural de Fotos*                                        |
|---|---|
|Requisito Associado | RNF-010 - A aplicação deve permitir que o usuário faça uploads de fotos dos seus pets adotados para o mural dos Felpudos, da página inicial|
|Link do vídeo do teste realizado: | https://youtu.be/bFmuAsSMOrc |

|*Caso de Teste*                                 |**CT05 - Permitir cadastro de novos usuários**                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação Web deverá permitir o cadastro de novos usuários|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1CrQOeqQ3kN81XZDBaM17KmiiiAECLS3c?usp=sharing |

|*Caso de Teste*                                 | **CT06 - O tutor deverá preencher um formulário**                                        |
|---|---|
|Requisito Associado | RF-003 - A aplicação terá uma página que se apresente logo após o cadastro do usuário e pela qual esse deverá preencher um formulário |
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1CrQOeqQ3kN81XZDBaM17KmiiiAECLS3c?usp=sharing |

|*Caso de Teste*                                 | **CT07 - Envio do email pelo site**                                        |
|---|---|
|Requisito Associado | RF-015 - A aplicação Web deverá incorporar mecanismos de feedback para permitir que os usuários forneçam comentários sobre sua experiência |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1H0Vfe92-3sGB7O25PLrv0u7mK8Pk0ATa/view?usp=drive_link |

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja cadastrar um de seus animais de estimação para adoção. |
| 2             | Você é uma pessoa que deseja alterar uma informação errada sobre  seu animal de estimação colocado para adoção. |
| 3             | Você é uma pessoa que deseja apagar o registro de um de sues animais que já foi doado. |
| 4             | Você é uma pessoa que deseja adotar um animal que seja de uma cidade especifica. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja cadastrar um de seus animais de estimação para adoção.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 40.12 segundos                  |
| 2       | SIM             | 5                    | 46.35 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 43.23 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 28 segundos |


    Comentários dos usuários: Bem simples e fácil para cadastrar.


Cenário 2: Você é uma pessoa que deseja alterar uma informação errada sobre  seu animal de estimação colocado para adoção.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35.40 segundos                          |
| 2       | SIM             | 5                    | 55.28 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 45.34 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |


    Comentários dos usuários: Segue o exemplo do cadsatro e trás de volta as informações isso ajuda muito.


    Cenário 3: Você é uma pessoa que deseja apagar o registro de um de sues animais que já foi doado.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 12.28 segundos                          |
| 2       | SIM             | 5                    | 26.40 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 19.34 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 1 segundos |


    Comentários dos usuários: Extremamente simples.

    

    Cenário 4: Você é uma pessoa que deseja adotar um animal que seja de uma cidade especifica.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 12.21 segundos                          |
| 2       | SIM             | 5                    | 15.44 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 14,02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5 segundos |


    Comentários dos usuários: Muito bom, mas se tiver escrito errado não vai achar.


## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



