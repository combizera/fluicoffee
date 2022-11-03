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

const tabMenu = document.querySelectorAll(".js-tabmenu a");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("active");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });
    tabContent[index].classList.add("active");
  }

  tabMenu.forEach((a, index) => {
    a.addEventListener("click", function () {
      activeTab(index);
    });
  });
}

function btnHamburguer() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector(".header__nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}

btnHamburguer();
