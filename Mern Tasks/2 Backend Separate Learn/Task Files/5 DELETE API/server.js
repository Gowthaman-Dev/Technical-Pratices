import express from "express";

const app = express();

const users = [
  { id: 1, name: "Rocky" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Sam" }
];

app.delete("/delete/:id",(req,res)=>{
  const userid = Number(req.params.id) 

  const filterusers =  users.filter((user)=>user.id !== userid)

  res.json({
    msg:"Successfully user Deleted",
    filterusers 
  })
})

app.listen(5000, () => {
  console.log("Server Running http://localhost:5000");
});