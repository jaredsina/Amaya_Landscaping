import River from "./river.jpg";

const image = () => {
  const image = document.createElement("img");
  image.src = River;
  return image;
};
const header = () => {
  const header = document.createElement("h1");
  header.innerHTML = "About Us";
  return header;
};

const paragraph = () => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "We have been working in landscaping for over 10 years. We have plenty of experience trust us.... hahaha";
  return paragraph;
};
const load = () => {
  const content = document.querySelector("#content");
  const loadContainer = document.createElement("div");
  loadContainer.classList.add("about-container");
  loadContainer.appendChild(image());
  loadContainer.appendChild(header());
  loadContainer.appendChild(paragraph());

  content.appendChild(loadContainer);
};

export default load;
