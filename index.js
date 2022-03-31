// const url = "https://jsonplaceholder.typicode.com/todos";

//all 200 records

// const getData = () => {
//   axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/todos",
//   }).then((res) => showOutput(res));
// };

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

const getData = () => {
  axios("https://jsonplaceholder.typicode.com/todos", {
    params: { id: 3 },
  }).then((res) => showOutput(res));
};

const addData = () => {
  console.log("addData");
};

const updateWholeData = () => {
  console.log("updateWholeData");
};

const updateData = () => {
  console.log("updateData");
};

const removeData = () => {
  console.log("removeData");
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
