# Informaçoes sobre o projeto e declarações
- Feito utilizando NextJS (React), TailwindCSS para estilização e Typescript como linguagem por garantir tipagem dos dados e melhor organizção


## Como rodar o projeto em sua máquina.
- **cd challenge-estoa**
- **npm install** 
- **npm run dev**

-> A partir desse momento, no terminal tera um link do localhost para ser acessado , apenas click e você serå redirecionado(a) para a pagina inicial

## Sobre o projeto

- Primeiramente gostaria de pedir perdão, pois confundi uma coisa, e ao invés de criar um filtro por filmes , criei um por nomes dos personagems, foi falta de atenção minha. Porém, conseguiria implementar, não implementei por conta de que quando me dei conta disso eu ja estava prestes a entregar o projeto.

- Na pagina de detalhes do personagem possui informações sobre o personagem especificamente, sobre seu pais natal e sobre os filmes em que apareceu.

- A api SWAPI tem algumas limitações, a URL que é passada para gerar o GET de TODOS personagems apenas retorna 10 em um array, no site dizem que existem 82 personagens então imaginei que existisse alguma paginação, contudo , não é falado nada de paginação na documentação.
    
- Existe um filtro por Nome de personagem, e o fetch a partir do filtro busca personagems diferentes dos que vem no fetch de "todos", como por exemplo : o personagem Darth Maul nao esta nos 10 personagens que vem no get, porem ao digitar seu nome e buscar por ele pela http de search params, retorna-se ele.

- Disponibilizei algumas fotos dos personagens da internet para o projeto ficar visualmente mais agradavel, porém apenas dos 10 primeiros. Criei uma função utilitaria chamada getImagePath que funciona pegando as imagems na pasta **assets** com base em seu nome, a foto do personagem deve estar com o nome igual disponibilizado na api, com o nome todo minusculo e separado por '-'

## Possíveis melhorias

- Uma coisa que eu acabei adotando por conta desse projeto por conseguir ganhar mais um tempo, foi juntar a lógica com os componentes... O ideal seria ter a lógica (chamadas a apis, metodos separados) e meus componentes apenas terem a informação de UI, design dos componentes.

- O "componente" main page esta atuando como pagina prinicpal, logo , poderia ser uma page do next ao invéz de estar em um componente