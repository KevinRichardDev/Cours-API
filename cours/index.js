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
fetch("data.json")
  .then((res) => res.json())
  // .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
}

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), read (GET), update (PUT), Delete (DELETE)