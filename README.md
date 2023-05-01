## Fake Store
Este é um projeto de exemplo que utiliza o ReactJS para consumir a API Fake Store e exibir uma lista de produtos.


## Como executar

Para executar este projeto, siga as instruções abaixo:


Clone este repositório em sua máquina local:

```bash
git clone https://github.com/Emersonlvs10/fake-store.git
```
Instale as dependências do projeto:


```bash
cd fake-store
npm install
```
Inicie o servidor de desenvolvimento:

```bash
npm start
O servidor será iniciado em http://localhost:5173/
```

## Como funciona
Ao iniciar a aplicação, ela irá consumir a API Fake Store utilizando a função `fetch()` para obter a lista de produtos disponíveis. Em seguida, a lista é armazenada no estado `items` do componente principal `App`. Esse estado é utilizado para renderizar a lista de produtos na tela, utilizando os componentes `Menu` e `Categories`.

O componente `Categories` exibe uma lista de categorias únicas dos produtos, permitindo que o usuário filtre a lista de produtos por categoria. Quando o usuário seleciona uma categoria, o componente `App` atualiza o estado `menuItems` com a lista de produtos filtrada pela categoria selecionada. Em seguida, o componente `Menu` é renderizado novamente com a nova lista de produtos.
## Tecnologias utilizadas
- ReactJS
- JavaScript
- CSS
- API Fake Store

## Demo
https://fake-store-sigma.vercel.app/
