const d = document;
const $carrusel = d.querySelector(".carrusel");

function carrusel() {
  var obj = {
method: 'GET' ,
mode : 'no-cors',
headers: {
'Access-Control-Allow-Origin': '*',
'Content-Type': 'application/json'
}
};
fetch('https://github.com/charlymil979/TPO-23024/tree/main/docs/json/carrusel.json', obj )
    .then((resp) => {
        console.log(resp);
        resp.json()})
    .then((data) => {
      // console.log(data);
      let $imagenes = "";
      for (const foto in data) {
        // console.log(foto, data[foto]);
        $imagenes += `
      <img class="carrusel-foto" src="${data[foto]}" alt="${foto}">
      `;
      }
      console.log($imagenes)
      $carrusel.innerHTML = $imagenes;
      // console.log($carrusel);
      const $foto = d.querySelectorAll(".carrusel-foto");
      // console.log($foto)
      let posic=0
      let maxPosic=$foto.length
      setInterval(() => {
        $foto.forEach(foto =>{
          foto.classList.remove("foto-activa");
        })
        $foto[posic].classList.add("foto-activa")
        posic++
        if(posic===maxPosic) {posic=0};
      }, 2000);
    });
}
carrusel();
