const d = document,
  oscuro = "rgb(35,35,35)",
  claro = "rgb(240, 240, 240)";

  
  export function darkButton() {
  document.documentElement.style.setProperty("--color-fondo",claro);
  document.documentElement.style.setProperty("--color-texto",oscuro);

  const $body = document.querySelector("body"),
    $dark = d.createElement("button");
    
  $dark.classList.add("dark-mode");
  $dark.textContent = "🌙";
  $body.insertAdjacentElement("afterbegin", $dark);
}

export function darkMode() {
    const $button = d.querySelector(".dark-mode"),
    isactive = localStorage.getItem("darkmode") || 0,
    moon = "🌙",
    sun = "☀️";

  const darkactive = function () {
      $button.textContent = sun;
      localStorage.setItem("darkmode", 1);
        document.documentElement.style.setProperty("--color-fondo", oscuro);
        document.documentElement.style.setProperty("--color-texto", claro);
    },
    light = function () {
      $button.textContent = moon;
      localStorage.setItem("darkmode", 0);
        document.documentElement.style.setProperty("--color-fondo", claro);
        document.documentElement.style.setProperty("--color-texto", oscuro);
    };
  //este if es para comprobar si quedo activado en memoria
  if (isactive === "1") darkactive();

  d.addEventListener("click", (e) => {
    if (e.target.matches(".dark-mode") || e.target.matches(`.dark-mode *`)) {
      if ($button.textContent === moon) {
        darkactive();
      } else {
        light();
      }
    }
  });
}
