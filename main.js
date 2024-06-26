

const botaoMenu = document.querySelector(".botao_menu");
const menuLateral = document.querySelector(".menu_lateral");

botaoMenu.onmousedown = () => {
  toggleMenu();
}

const toggleMenu = () => {
  menuLateral.classList.toggle("esconder_menu");
}

const fecharMenu = () => {
  menuLateral.classList.add("esconder_menu");
}

// window.addEventListener("load", () => toggleMenu());