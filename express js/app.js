const express = require('express');
const app = express();
PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server is running at  https//localhost:${PORT}`);
});

app.get("/" , (req,res) => {
    res.send("THIS IS HOME PAGE");
    res.end();
});
app.delete("/del" , (req,res) => {
    res.send("THIS IS delete PAGE");
    res.end();
});
app.post("/contact" , (req,res) => {
    res.send("THIS IS post PAGE");
    res.end();
});
