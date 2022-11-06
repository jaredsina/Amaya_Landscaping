import mower from "./mower.jpg";

const image = () => {
  //Create image element
  const image = document.createElement("img");
  image.src = mower;
  return image;
};

const header = () => {
  //Create header element
  const header = document.createElement("h1");
  header.innerHTML = "Amaya Landscaping";
  return header;
};
const paragraph = () => {
  //Create paragraph element
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Amaya Landscaping is based in New Jersey. We provide a variety of landscaping services.";
  return paragraph;
};
const load = () => {
  const content = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.appendChild(image());
  homeContainer.appendChild(header());
  homeContainer.appendChild(paragraph());

  content.appendChild(homeContainer);
};

export default load;
