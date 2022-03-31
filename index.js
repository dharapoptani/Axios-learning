const url = "https://jsonplaceholder.typicode.com/todos";

const getData = () => {
  console.log("getData");
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
