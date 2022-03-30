const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// const elementLi = document.createElement("li");

// // Jetzt fügen wir das img element in das body element ein
// const ul = document.querySelector("ul");
// ul.appendChild(elementLi);

for (let book of books) {
  //container of div/card:  ul
  const elementUl = document.querySelector("ul");
  elementUl.classList.add("book-list");
  //elementUl.style.boxSizing = "border-box";
  //card(div): 1)img:cover + 2) div (h2:title, p:author, span: read-status)
  const elementDiv = document.createElement("div");
  elementUl.appendChild(elementDiv);
  elementDiv.style.border = "2px solid #eee";
  //elementDiv.style.padding = "1rem";

  //1-the first element in the div-card :img
  const elementImg = document.createElement("img");
  elementImg.src = book.img;
  // adding class to the img-element :
  elementImg.classList.add("book-cover");
  elementImg.classList.add("book");

  elementDiv.appendChild(elementImg);

  // 2- the second element in the div-card :another div
  const elementDivFooter = document.createElement("div");
  elementDiv.appendChild(elementDivFooter);
  elementDiv.classList.add("book");
  elementDiv.style.display = "flex";
  elementDiv.style.flexDirection = "column";
  elementDiv.style.alignItems = "center";

  elementDiv.style.gap = "1.5rem";
  //   this div contain a h2, p, and span:
  // h1 : the first child of the inner-div
  const elementH5 = document.createElement("h5");
  elementH5.innerText = book.title;
  elementDivFooter.appendChild(elementH5);
  // p : the second child of the inner-div
  const elementP = document.createElement("p");
  elementP.innerText = book.author;
  elementDivFooter.appendChild(elementP);
  elementP.style.borderBottom = "2px solid #eee";
  //elementP.style.marginTop = "1.5rem";
  // span: the third child of the inner-div
  const elementSpan = document.createElement("span");
  elementSpan.innerText = book.alreadyRead;
  //elementImg.classList.add("status");
  elementDivFooter.appendChild(elementSpan);
  elementSpan.style.padding = ".2rem .5rem";
  elementSpan.style.borderRadius = "5rem";
  elementSpan.style.borderTop = "1px solid #eee";
  elementSpan.style.display = "inline-block";
  elementSpan.style.backgroundColor = "#eee";
  book.alreadyRead
    ? (elementSpan.innerText = "Read")
    : (elementSpan.innerText = "To read");
  if (book.alreadyRead) {
    elementSpan.innerText = "Read";
    elementSpan.style.backgroundColor = "green";
  } else {
    elementSpan.innerText = "To read";
    elementSpan.style.backgroundColor = "#eee";
  }
}
