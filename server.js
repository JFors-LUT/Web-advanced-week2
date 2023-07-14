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

//list of words for POST route "/list"
let list = []

//simple GET routes
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

// POST route for "/sum"
app.post("/sum", (req, res) => {
    let total = 0
    numbers = req.body.numbers
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }  
    total = {sum: total}
    res.json(total)
    
});

// POST route for "/list"
app.post('/list', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    const text = data.text;
    list = list.concat(text);
    return_list = {"list": list}
    res.status(200).send(return_list);
  });

app.listen(port, () => console.log(`Server listening a port ${port}!`));
