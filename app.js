const list = document.querySelector(".list");

for (let element of pokemons) {
  const item = document.createElement("li");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const text = document.createElement("p");
  const info = document.createElement("button");

  item.innerHTML = element.id;
  text.innerHTML = element.name;
  title.innerHTML = element.type;
  text.innerHTML = element.height;
  text.innerHTML = element.weight;
  text.innerHTML = element.candy;
  info.innerHTML = element.type;

  title.setAttribute("class", "text");
  image.setAttribute("src", element.img);
  image.setAttribute("class", "img");
  item.setAttribute("class", "item");
  info.setAttribute("class", "btn");
  item.appendChild(image);
  item.appendChild(title);
  item.appendChild(text);
  list.appendChild(item);
  item.appendChild(info);

  document.body.appendChild(list);
}
