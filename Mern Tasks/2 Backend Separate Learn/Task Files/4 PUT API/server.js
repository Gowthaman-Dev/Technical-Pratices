import express from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Rocky" },
  { id: 2, name: "Ram" }
];

// PUT API
app.put("/update/:id", (req, res) => {

  const userId = Number(req.params.id);

  const updatedName = req.body.name;

  const updatedUsers = users.map((user) =>
    user.id === userId
      ? { ...user, name: updatedName }
      : user
  );

  res.json({
    message: "User Updated Successfully",
    updatedUsers
  });

});

app.listen(5000, () => {
  console.log("Server Running http://localhost:5000");
});