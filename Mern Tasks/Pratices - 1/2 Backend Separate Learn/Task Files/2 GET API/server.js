import express from "express";

const app = express();

const users = [
  { id: 1, name: "Rocky" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Sam" }
];

// GET API
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server Running http://localhost:5000");
});