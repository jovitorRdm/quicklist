const form = document.querySelector("form");
const lista = document.querySelector("ul");
const input = document.querySelector("input");
const container = document.querySelector(".container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const compra = criarElementoCompra(input.value);
  lista.prepend(compra);
  input.value = "";
});

function criarElementoCompra(nome) {
  const compra = document.createElement("li");

  const status = document.createElement("input");
  status.type = "checkbox";

  const NomeDaCompra = document.createElement("span");
  NomeDaCompra.textContent = nome;

  const deletarItem = criarBotaoDeletar(compra, NomeDaCompra);

  compra.prepend(status, NomeDaCompra, deletarItem);

  status.addEventListener("change", () => {
    if (status.checked) {
      NomeDaCompra.classList.add("completed");
      compra.classList.add("completedItem");
    } else {
      NomeDaCompra.classList.remove("completed");
      compra.classList.remove("completedItem");
    }
  });

  return compra;
}

function criarBotaoDeletar(compra, NomeDaCompra) {
  const deletarItem = document.createElement("button");
  const imgDeDeletar = document.createElement("img");
  imgDeDeletar.src = "./img/delite.svg";
  deletarItem.append(imgDeDeletar);

  deletarItem.addEventListener("click", () => {
    compra.remove();
    mostrarAlertaDeletar(NomeDaCompra.textContent);
  });

  return deletarItem;
}

function mostrarAlertaDeletar(nome) {
  const alertDelete = document.createElement("li");
  alertDelete.classList.add("Alerta");

  const imgDeAlert = document.createElement("img");
  imgDeAlert.src = "./img/warning-circle-filled.svg";

  const conteudoAlert = document.createElement("span");
  conteudoAlert.textContent = `O item "${nome}" foi removido da sua lista`;

  const deletarAlerta = document.createElement("button");
  deletarAlerta.textContent = "X";
  deletarAlerta.addEventListener("click", () => {
    alertDelete.remove();
  });

  alertDelete.append(imgDeAlert, conteudoAlert, deletarAlerta);
  container.append(alertDelete);

  setTimeout(() => {
    alertDelete.remove();
  }, 3000);
}
