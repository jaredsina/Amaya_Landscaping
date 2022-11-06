import Work from "./work.jpg";

const image = () => {
  const image = document.createElement("img");
  image.src = Work;

  return image;
};
const header = () => {
  const header = document.createElement("h1");
  header.innerHTML = "Services";

  return header;
};
const paragraph = () => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "We do landscaping work. Like cutting grass and taking names";

  return paragraph;
};
const load = () => {
  const content = document.getElementById("content");
  const servicesContainer = document.createElement("div");
  servicesContainer.classList.add("services-container");

  servicesContainer.appendChild(image());
  servicesContainer.appendChild(header());
  servicesContainer.appendChild(paragraph());

  content.appendChild(servicesContainer);
};

export default load;
