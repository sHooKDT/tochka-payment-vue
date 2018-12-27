const express = require("express");
const bodyParser = require("body-parser");
const dbAPI = require("./database");

const port = 5000;
const app = express();
app.use(bodyParser());

function logAndReturn(arg) {
  console.log(arg);
  return arg;
}

app.get("/test", (req, res) => res.send(req.body));

app.post("/payment/create", (req, res) => {
  dbAPI
    .store("payments", req.body)
    .then(logAndReturn, logAndReturn)
    .then(() => res.send(), () => console.log("ERROR"));
});

app.post("/payment/create/online", (req, res) => {
  dbAPI
    .store("online-payments", req.body)
    .then(logAndReturn, logAndReturn)
    .then(result => res.send({ status: "success", id: result.insertedId }));
});

app.get("/payment/:id/invoice", (req, res) => {
  dbAPI.findInCollectionById("online-payments", req.params.id).then(doc => {
    const response = `
<html lang="ru">
  <body>
    <table>
      <tbody>
      ${Object.entries(doc).map(
        ([key, value]) =>
          `<tr><td>${key.toUpperCase().bold()}</td><td>${value}</td></tr>`
      )}
      </tbody>
    </table>
  </body>      
</html>  
`;
    res.send(response);
  });
});

app.post("/payment/:id/unsafe", (req, res) => {
  const id = req.params.id;

  dbAPI
    .changeDocument("payments", id, { $set: { notSafe: true } })
    .then(() => res.send("ok"));
});

app.get("/payments/list/cards", (req, res) => {
  if (req.query.sort) {
    dbAPI.fetchSorted("payments", req.query.sort).then(docs => res.json(docs));
  } else {
    dbAPI.fetch("payments").then(docs => res.json(docs));
  }
});

app.get("/payments/list/online", (req, res) => {
  dbAPI
    .fetch("online-payments")
    .then(logAndReturn)
    .then(docs => res.send(docs));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
