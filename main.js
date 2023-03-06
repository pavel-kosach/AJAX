// Написать две функции для реализации AJAX запросов: getData и sendData
// Реализовать получение данных из файла .json (прикреплен под видео)  через функцию getData
const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => sendData(data))
    .catch((error) => console.log(error));
};
// После получения объекта из файла .json должна произойти отправка данных (которые мы получили из файла .json) на URL через функцию sendData
// https://jsonplaceholder.typicode.com/posts
const sendData = (data) => {
  console.log(data);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
// 5) Ошибки должны быть обработаны
getData();
