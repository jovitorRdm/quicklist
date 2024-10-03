const form = document.querySelector("form")
const lista = document.querySelector("ul")
const input = document.querySelector("input")
const container = document.querySelector(".container")

form.addEventListener("submit", (event)=>{
  event.preventDefault()

  const compra = document.createElement("li")

  const alertDelete = document.createElement("li")
  const conteudoAlert = document.createElement("span")
  const deletarItem = document.createElement("button")
  const deletarAlerta = document.createElement("button")
  const imgDeDeletar = document.createElement("img")
  const imgDeAlert = document.createElement("img")
  
  const status = document.createElement("input")
  const NomeDaCompra = document.createElement("span")
  
  const inputValue = input.value
  
  alertDelete.classList.add("Alerta")
  deletarAlerta.textContent = "X"
  alertDelete.append(deletarAlerta)

  imgDeDeletar.src="./img/delite.svg"
  imgDeAlert.src="./img/warning-circle-filled.svg"
  
  deletarItem.append(imgDeDeletar)

  status.type = "checkbox"

  NomeDaCompra.textContent = inputValue
  
  compra.prepend(status, NomeDaCompra, deletarItem)
  lista.prepend(compra)

  input.value = ""
  

  deletarItem.addEventListener("click", () => {   
    compra.remove() 
    conteudoAlert.textContent = `O item "${NomeDaCompra.textContent}" foi removido da sua lista`
    alertDelete.append(imgDeAlert, conteudoAlert, deletarAlerta)
    
    container.append(alertDelete)
    
    setTimeout(() => {
      alertDelete.remove()
    }, 3000)
  })

  deletarAlerta.addEventListener("click", ()=>{
    alertDelete.remove()
  })

  status.addEventListener("change", () => {
    if (status.checked) {
      NomeDaCompra.classList.add("completed")
      compra.classList.add("completedItem")
    } else {
      NomeDaCompra.classList.remove("completed")
      compra.classList.remove("completedItem")
    }
  })

})


