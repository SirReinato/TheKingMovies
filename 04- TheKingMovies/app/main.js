const form = document.getElementById("form");
const elemento = JSON.parse(localStorage.getItem("filmes")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = event.target.elements["nome"].value;
  const ano = event.target.elements["ano"].value;

  const arrayFilmes = {
    nome: nome,
    ano: ano,
  };

  criarFilme(arrayFilmes)


  elemento.push(arrayFilmes);
  localStorage.setItem("filme", JSON.stringify(elemento));
});


function criarFilme(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("itemDaLista");
  const strong = document.createElement("strong");

  strong.innerHTML = item.quantidade;
  novoItem.dataset.id = item.id;

  novoItem.appendChild(strong);

  novoItem.innerHTML += item.produto;
  lista.appendChild(novoItem);
}