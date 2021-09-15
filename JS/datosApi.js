// ENVIAR DATOS AL API //

// const Http = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/posts";
// Http.open("GET", url);
// Http.send();
// http.posts();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText);
// };

// $(document).ready(function () {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   $(`.btn-purchase`).click(function () {
//     $.ajax({
//       url: url,
//       type: "GET",
//       success: function (result) {
//         console.log(result);
//       },
//       error: function (error) {
//         console.log(`Error ${error}`);
//       },
//     });
//   });
// });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Prueba",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
