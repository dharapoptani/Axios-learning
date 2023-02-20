// const url = "https://jsonplaceholder.typicode.com/todos";

//all 200 records

const getData = () => {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  }).then((res) => showOutput(res));
};

//only specific id record

// const getData = () => {
//   const config = {
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos",

//     params: {
//       id: 1,
//     },
//   };

//   axios(config).then((res) => showOutput(res));
// };

// specific limit

// const getData = () => {
//   axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
//   }).then((res) => showOutput(res));
// };

// const getData = () => {
//   axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     params: {
//       _limit: 6,
//     },
//   }).then((res) => showOutput(res));
// };

//axios.get(url)

//

// call without method name by dfault it is get

// const getData = () => {
//   axios("https://jsonplaceholder.typicode.com/todos", {
//     params: { id: 3 },
//   }).then((res) => showOutput(res));
// };

//POST Syntaxs

// const addData = () => {
//   axios({
//     method: "post",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     data: {
//       title: "dhara popatni",
//       completed: true,
//     },
//   }).then((res) => showOutput(res));
// };

const addData = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "Rinkle popatni",
      completed: true,
    })
    .then((res) => showOutput(res));
};

//PUT request

// const updateWholeData = () => {
//   axios({
//     method: "put",
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     data: {
//       title: "hello world",
//       completed: true,
//     },
//   }).then((res) => showOutput(res));
// };

const updateWholeData = () => {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", {
      title: "hello world",
      completed: true,
    })
    .then((res) => showOutput(res));
};

// PATCH request
// const updateData = () => {
//   axios({
//     method: "patch",
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     data: {
//       title: "hello world",
//       completed: true,
//     },
//   }).then((res) => showOutput(res));
// };

const updateData = () => {
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "hello world",
      completed: true,
    })
    .then((res) => showOutput(res));
};

const removeData = () => {
  axios({
    method: "delete",
    url: "https://jsonplaceholder.typicode.com/todos/5",
  }).then((res) => showOutput(res));
};

const showOutput = (res) => {
  document.getElementById("res").innerHTML = `
      <div class="cont">
        <h1>Config</h1>
        <p>Method : ${res.config.method}</p>
        <p>Status code : ${res.request.status}</p>

    </div>
    <div class="cont">
    ${JSON.stringify(res.data)}
    </div>`;
};

document.getElementById("get").addEventListener("click", getData);
document.getElementById("post").addEventListener("click", addData);
document.getElementById("put").addEventListener("click", updateWholeData);
document.getElementById("patch").addEventListener("click", updateData);
document.getElementById("delete").addEventListener("click", removeData);
