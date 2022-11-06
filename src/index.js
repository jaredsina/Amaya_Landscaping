import loadHome from "./home";
import "./style.css";
import loadAbout from "./about";
import loadServices from "./services";

const content = document.querySelector("#content");
const nav = document.querySelector("#navbar");
const navbar = document.createElement("ul");
navbar.classList.add("navbar");

const homeTab = document.createElement("li");
homeTab.innerHTML = "HOME";
homeTab.addEventListener("click", showHome);
navbar.appendChild(homeTab);

const about = document.createElement("li");
about.innerHTML = "ABOUT";
about.addEventListener("click", showAbout);
navbar.appendChild(about);

const services = document.createElement("li");
services.innerHTML = "SERVICES";
services.addEventListener('click', showServices)
navbar.appendChild(services);


nav.appendChild(navbar);

function clearPage() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
function showHome() {
  clearPage();
  loadHome();
}
function showAbout() {
  clearPage();
  loadAbout();
}
function showServices(){
  clearPage();
  loadServices();
}