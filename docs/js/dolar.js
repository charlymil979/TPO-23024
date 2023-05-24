const d=document

const $dolar = d.querySelector(".dolar");
const $cierre = d.querySelector(".cierre");
const $mostrar = d.querySelector("#imgdolar")

function dolar() {
  d.addEventListener('click', e=>{
    console.log(e.target)
    if(e.target.matches(".cierre")){
      e.preventDefault();
      $dolar.classList.add('none')
    }
    if (e.target.matches("#imgdolar")) {
      e.preventDefault();
      $dolar.classList.remove("none");
    }
  })
}
dolar()