const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function save() {

  //Salvando as alterações do formulário e transformando em Strings
localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

function add() {
    //Formatando a data atual e salvando na variável
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    //Chamando a função 'dayExist' e armazenando na variável
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert("Dia já está incluso 🚨")
    return
  }

  nlwSetup.addDay(today)
  alert("Adicionado com sucesso! ✅")
}

//Retirando as informações salvas do formulário e transformando em objetos
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()