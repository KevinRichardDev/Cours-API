// XMLHttpRequest

// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open('get', 'data.txt', true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// FETCH

// fetch("mon-url", "object d'options").then((response) => {
//   // console.log(response)
// }).catch((err) => console.log(err));

// pour les fichiers txt
// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// pour les fichiers .json
fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), read (GET), update (PUT), Delete (DELETE)


// Création (POST)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "KevinRichardDev",
    message: "Comment ça va aujourd'hui ?",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//-------
// DELETE
//-------

// const init2 = {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   mode: "cors",
//   credentials: "same-origin",
// };

// document.querySelector("form").addEventListener("submit", () => {
//   fetch("http://localhost:3000/posts/a374", init2).then(() =>
//     console.log("data envoyée")
//   );
// });

// Asynshrone

setTimeout(() => {
  // console.log("test");
}, 2000);

//Promise
// fetch('mon lien').then((res) => res)

// async/await
// async function fetchData() {
//   await fetch('monlien')
//   // attend que le await soit éxécuté avant de faire la suite

//   await executeFonction();
//   await console.log();
//   await console.log();
//   await console.log();
// }

// Pour une fonction fléché le async doit toujours être avec le paramètre.
const fetchData2 = async () => {
  await fetch("monlien");
  //attend que le await soit exécuté avant de faire la suite

  executeFonction();
};

//-------
// LE JSON
//-------


// Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête.

fetch("data.json").then((res) => res.json()).then((data) => {
  // Stringify => convertit en JSON
  let settings = JSON.stringify(data);
  // Parse => transform json en objet js
  // console.log(JSON.parse(settings));
});

//-------
// Web API
//-------


// CLIENT STORAGE
//-------

// Local Storage
localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
}


// WARNING localStorage n'accepte que les chaines de caractère
// Il faut donc convertir en chaîne de caractère.

// localStorage.user = "Francis";
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user));

//Session Storage
