



function ex(){
  var contas = document.querySelectorAll('.close');

  contas.forEach((el, index)=>{
    el.addEventListener('click',()=>{
      el.parentNode.remove();
    })
  })
}
ex();

var botao = document.getElementById('submit')

botao.addEventListener('click',(e)=>{
  e.preventDefault();

  var data = document.getElementById('data').value
  var tipo = document.getElementById('tipo').value
  var id = document.getElementById('id').value
  var chave = document.getElementById('chave').value
  var valor = document.getElementById('valor').value
  var status = document.getElementById('status').value 
  var conta = document.getElementById('container')
  console.log(status);
  var cor = status

  var novoitem = document.createElement("div");
  novoitem.classList.add('conta')
  novoitem.classList.add(`${cor}`)
  novoitem.innerHTML = `<span class="close" onclick=(ex())>X</span>
  <div class="conta__left">
  <p>data: ${data}</p>
  <p>tipo: ${tipo}</p>
  <p>chave: ${chave}</p>
  <p>id: ${id}</p>
  </div>
  <div class="valor ${cor}">
  <p>R$ ${valor}</p>
  </div></div>
  `
  conta.appendChild(novoitem)
  // console.log(novoitem);

})