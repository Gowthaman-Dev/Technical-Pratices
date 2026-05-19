import express from "express";

const app = express();

app.use(express.json());

const users = [];

// POST API
app.post("/adduser", (req, res) => {

  const newUser = req.body;

  users.push(newUser);

  res.json({
    message: "User Added Successfully",
    users
  });

});

app.listen(5000, () => {
  console.log("Server Running http://localhost:5000");
});