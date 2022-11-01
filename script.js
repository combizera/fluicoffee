const linksInternos = document.querySelectorAll(".maq-dados-painel a");

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    item.classList.remove("active");
  });
  event.currentTarget.classList.add("active");

  console.log("Clicou");
}

linksInternos.forEach((event) => {
  event.addEventListener("click", handleLink);
});

console.log("alou");
