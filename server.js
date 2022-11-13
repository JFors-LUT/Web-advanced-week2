let helloWorld = {
    msg: "Hello world"
}


const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());



app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
    res.json(helloWorld);
});


app.get("/echo/:id", (req, res) => {
    animal = {id: req.params.id}
    res.json(animal);
    
});

app.listen(port, () => console.log(`Server listening a port ${port}!`));
