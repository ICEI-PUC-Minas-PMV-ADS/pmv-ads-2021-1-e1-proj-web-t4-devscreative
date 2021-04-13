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
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

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
