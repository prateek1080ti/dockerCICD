const express = require("express");
const app = express();

let count = 0;

app.get("/", (req, res) => {
  res.send(`
    <h1>Count: ${count}</h1>
    <button onclick="fetch('/click').then(()=>location.reload())">
      Click Me
    </button>
  `);
});

app.get("/click", (req, res) => {
  count++;
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
