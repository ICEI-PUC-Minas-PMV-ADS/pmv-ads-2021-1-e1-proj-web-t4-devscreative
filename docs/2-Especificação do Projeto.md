# Especificações do Projeto

Considerando que a plataforma a ser desenvolvida neste projeto deve atender tanto aos adotantes potenciais (pessoas interessadas em adotar animais) qauanto aos voluntários das ONGs de proteçãoanimal,
a definição dos problemas a serem tratados neste projeto foi feita através de duas abordagens. Primeiro, criamos um formulário que enviamos para diversas pessoas interessas em adoção. Segundo, utilizamos levantamento sobre perfil de voluntários apresentado no artigo "Caracterização do perfil de indivíduos que resgatam animais em situação de maus tratos" de Viviane Aguiar de Souza e Ana Paula Iglesias Santin.

## Personas

### Tânia Evangelista

Idade: 45

Ocupação: Bióloga de formação, atua como pet sitter (pessoa que cuida de animais quando os tutores viajam ou trabalham fora o dia inteiro) e é voluntária em uma ONG de adoção de gatos.

Aplicativos: Instagram, Facebook.

Motivações: Amor aos animais, omissão do poder público quanto à situação dos animais de rua.

Frustrações: Escassez de recursos financeiros para manter a ONG (gastos com veterinários sendo o mais grave), falta de comprometimento de adotantes que devolvem os animais, falta de espaço físico para abrigar mais animais.

Hobbies, história: Tânia vem de uma família que cultiva um enorme carinho por animais de estimação, sendo que ela sempre teve vários. Ela entende muito sobre as necessidades dos animais, especialmente dos felinos.

### Daniel Abreu
Idade: 30

Ocupação: Designer Gráfico, professor substituto no Senai Cecoteg - Atua como produtor e revisor de uma revista local.

Aplicativos: Behance, TikTok, Instagram, Facebook e LinkedIn.

Motivações: Pelo fato de escolherem não ter filhos, ele e a esposa decidiram adotar um animal de estimação com o intuito de dar mais vida a casa do casal. Além disso, sua espojá já tinha um gato adotivo e gostariam de ter mais animais. 

Frustrações: Todo processo que envolve a adoção é muito moroso. Além da demora na análise de quem adota, o fato de o animal estar disponível, não necessariamente garate que a escolha renderá frutos, pois alguma outra pessoa pode estar mais a frente no processo de avaliação e ficar com o animal. Além disso, os sites mencionam muitas poucas referências quanto às características dos animais. Isso é um pouco frustrante, pois podemos perder a oportunidade de adção caso o pet fique com um porte muito grande. 

Hobbies, história: Daniel sempre gostou de animais. Quando era membro de uma república, ele e seus amigos adotaram um cachorro de rua que virou o mascote da turma. Desde sua volta para BH, não teve mais a oportunidade de ter um animal de estimação. Foi quando conheceu Manu, sua atual esposa. Manu já têm um gato adotivo, e, como o casal gosta muito de viajar e não pretendem ter filhos, a ideia é aumentar a família de outra forma. Com a adoção de pets. A intenção deles, além de contribuir com a causa, é levar o ideal da adoção de animais para outras pessoas próximas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`       | QUERO/PRECISO ... `FUNCIONALIDADE`                 |PARA ... `MOTIVO/VALOR`                                                          |
|---------------------------|----------------------------------------------------|---------------------------------------------------------------------------------|
|Usuário do sistema			      |     Pré-cadastrar um novo animal                   |   divulgar o animal no portal.                                                  |
|Administrador do sistema   |     Cadastrar uma nova ONG                         |   divulgar ONGs parceiras.                                                      |
|Administrador do sistema   |     Cadastrar um novo espaço de lares provisórios  |   divulgar os lares provisórios.                                                |
|Administrador do sistema   |     Cadastrar um novo produto para venda           |   ajudar as ONGs com os custos.                                                 |
|Administrador do sistema   |     Cadastrar uma nova ação                        |   realizar ações de ajuda para as ONGs.                                         |
|Usuário do sistema         |     Me cadastrar no portal                         |   ter acesso ao portal                                                          |
|Usuário do sistema         |     Visualizar as ONGs cadastradas                 |   procurar ONGs em minha cidade                                                 |
|Usuário do sistema         |     Visualizar os voluntários cadastrados.         |   ver dados das pessoas que estão participando voluntariamente                  |
|Usuário do sistema         |     Visualizar os produtos em venda                |   fazer uma compra e ajudar.                                                    |
|Usuário do sistema         |     Visualizar os lares provisórios cadastrados    |   ver dados dos lares que estão participando                                    |
|Usuário do sistema         |     Visualizar as ações em andamento               |   participar e ajudar as ONGs                                                   |
|Administrador do sistema   |     Excluir dados dos animais cadastrados          |   retirar os animais que já foram adotados                                      |
|Administrador do sistema   |     Excluir dados das ONG cadastradas              |   a ONG que não for mais parceira                                               |
|Administrador do sistema   |     Excluir dados dos voluntários                  |   voluntários que não ajudam mais                                               |
|Administrador do sistema   |     Excluir dados dos produtos                     |   produtos que estão fora de linha ou esgotados                                 |
|Administrador do sistema   |     Excluir dados das ações                        |   ações que já se encerraram.                                                   |
|Administrador / Voluntário |     Modificar dados dos animais cadastrados        |   quando for cadastrado errado                                                  |
|Administrador / Voluntário |     Modificar dados das ONG cadastradas            |   quando houver uma mudança nos dados ou tiver alguma informação errada         |
|Administrador              |     Modificar dados dos voluntários                |   quando houver uma mudança nos dados ou tiver alguma informação errada         |
|Administrador / Voluntário |     Modificar dados dos produtos                   |   quando houver uma mudança nos dados ou tiver alguma informação errada         |
|Administrador / Voluntário |     Modificar dados das ações/doações              |   modificar dados das ações quando necessário                                   |
|Administrador do sistema   |     Cadastrar/Alterar/Excluir permissões no sistema|   gerir as permissões do sistema                                                |
|Voluntário / Aprovador     |     Aprovar animais pré-cadastrados                |    aprovar animais previamente cadastrados por usuários                         |
|Usuário do sistema         |     Compartilhar dados dos animais 				            |	discutir com amigos e conhecidos temas de interesse                            |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve conter campos para cadastro de usuários | ALTA | 
|RF-002| O site deve conter campos para cadastro de animais   | ALTA |
|RF-003| O site deverá conter uma página para venda de produtos | ALTA |
|RF-004| O site deverá conter um campo para cadastro de produtos, especificando com imagens, valor e descrição | ALTA |
|RF-005| O site deve apresentar, para cada animal correspondete, imagens e descrição | MÉDIA |
|RF-006| O site deve apresentar uma página de login para usuários já cadastrados | MÉDIA |
|RF-007| O site deverá conter, na página inicial, um atalho para cadastro de novos usuários | MÉDIA |
|RF-008| O site deverá conter uma interface padronizada para usuários com e sem cadastro | MÉDIA |
|RF-009| O site deve apresentar, para cada persona, uma descrição correspondente as caracteristicas do entrevistado | MÉDIA |
|RF-010| A página inicial do site deverá conter imagens e botões que direcione o usuário para a sessão de compras, adoção ou história das personas | MÉDIA |
|RF-011| O site poderá ter a opção de compartilhar as publicações nas redes sociais através de link direto | BAIXA |
|RF-012| O site permitirá usuários com cadastro fazerem avaliações sobre os produtos e comentários sobre os pets para adoção | BAIXA |
|RF-013| O site deverá conter informações sobre a ONG de animais, explicando sua trajetória, objetivos e personagens envolvidos | BAIXA |
|RF-014| No campo de cadastro de usuários, deverá ter um campo opcional para cadastro de cartão de crédito | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deverá ser desenvolvido na linguagem Java Script | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  ALTA | 
|RNF-003| O sistema deve utilizar a linguagem de marcação HTML |  ALTA |
|RNF-004| O sistema deverá se comunicar com o banco SQL Server | ALTA |
|RFN-005| O site deve ser compatível com os principais navegadores do mercado | MÉDIO |
|RFN-006| O sistema deverá ter alta disponibilidade | MÉDIO |
|RFN-007| O sistema deverá processar requisições em no máximo 5 segundos | BAIXA |
|RFN-008| O sistema deve pesar no máximo 1000kb | BAIXA |

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
