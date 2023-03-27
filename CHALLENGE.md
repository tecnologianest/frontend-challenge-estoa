# Estoa front-end challenge


## Como rodar o projeto?

- Abra a aplicação e instale as bibliotecas com o yarn ou npm install
- rode yarn dev ou npm run dev 
- Verifique a porta e abra a aplicação


O objetivo do desafio consumir a api: [Star Wars](https://swapi.dev/api).

## Algumas regras

- A aplicação não pode ser estática. Ela deve possuir alguma inteligência para exibir o catálogo de  personagens dinamicamente.
- Caso você opte por utilizar alguma ferramenta de _build_, não se esqueça de criar um arquivo com instruções para rodarmos o projeto.
- Se você estiver com dúvidas, busque por referências no Google, ou pergunte para amigos. Mas não peça para eles resolverem o desafio para você.

## Requisitos

- A página deve ser responsiva. Se possível, utilize a abordagem _mobile-first_.
- Mostrar uma página de catálogo com a lista de personagens Star Wars (ver [documentação](https://swapi.dev/documentation#people)).
    - name
    - species
    - birth_year
    
- Quando seleciona um personagem, abre uma página de detalhes com as informações:
    - name
    - birth_year
    - eye_color 
    - gender
    - hair_color
    - height 
    - mass
    - skin_color
    - homeworld
    - films
    - species
    
- Bónus:

    - filtro por filme no catálogo
    - obter uma thumbnail da internet

## Diferenciais

- Achou o teste até aqui fácil? Que tal adicionar um filtro para mostrar só os personagens por filmes (`films`)?
- Todos gostamos de código limpo e testável, certo? Teste sua aplicação e os componentes, esse será um grande diferencial.

## Critérios de avaliação

- O código será avaliado considerando: semântica, estruturação, legibilidade, tamanho, entre outros fatores.
- O histórico do `git` também será avaliado.
- Aqui na **Estoa**, utilizamos **React** nos novos projetos. Caso você tenha familiaridade com ela, pode utilizá-la para resolver o desafio.
- Estamos buscando um desenvolvedor front-end que saiba montar um _layout_ bonito e que também saiba programar em JavaScript, por isso aproveite a oportunidade para nos mostrar que você tem conhecimento nas duas áreas.
- Não esqueça da documentação. Ou como nós iremos conseguir avaliar o trabalho se não for possível inicializar o projeto em nossas máquinas?