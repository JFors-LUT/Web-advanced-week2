let helloWorld = {
    msg: "Hello world"
}


const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
//const router = express.Router();

app.use(express.json());



app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
    res.json(helloWorld);
});


app.get("/echo/:id", (req, res) => {
    animal = {id: req.params.id}
    res.json(animal);
    
});


/*app.get("/sum", (req, res) => {
    numbers = {
        numbers: [1, 2, 3]
    }
    res.json(numbers);
});*/

app.post("/sum", (req, res) => {
    let total = 0
    numbers = req.body.numbers
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }  
    res.json(total)
    
});

app.listen(port, () => console.log(`Server listening a port ${port}!`));
