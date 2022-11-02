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
