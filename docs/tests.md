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


**Caso de Teste** | **CT01 - Cradastrando PEt**
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
| 4             | Você é uma pessoa que deseja adotar um animal que seja de uma raça especifica. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



