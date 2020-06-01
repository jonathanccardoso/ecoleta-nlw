import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("List users!");

  response.json(["Johnny", "João", "José"]);
});

app.listen(3333);
