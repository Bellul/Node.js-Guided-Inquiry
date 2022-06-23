const express = require("express");
const app = express();
app.use(express.json());


const port = 8080;

app.listen(port, () => console.log(`Port ${port} is up and running`));

const employees = [
  
    {
        "employeeID": 3523,
        "firstName": "Jack",
        "lastName": "Black",
        "salary": "$30,000",
        "department": "Human Resources"
    },

    {
        "employeeID": 7003,
        "firstName": "Sarah",
        "lastName": "Chen",
        "salary": "$70,000",
        "department": "Software Development"
    },

    {
        "employeeID": 5046,
        "firstName": "William",
        "lastName": "Smith",
        "salary": "$30,000",
        "department": "Human Resources"
    },

    {
        "employeeID": 52,
        "firstName": "Christopher",
        "lastName": "Rock",
        "salary": "$50,000",
        "department": "Finance"
    },

    {
        "employeeID": 17,
        "firstName": "Jane",
        "lastName": "Cloud",
        "salary": "$50,000",
        "department": "Finance"
    },

    {
        "employeeID": 9345,
        "firstName": "Bugs",
        "lastName": "Bunny",
        "salary": "$40,000",
        "department": "Engineering"
    },

    {
        "employeeID": 8524,
        "firstName": "Daffy",
        "lastName": "Duck",
        "salary": "$40,000",
        "department": "Engineering"
    },

    {
        "employeeID": 5555,
        "firstName": "Spongebob",
        "lastName": "Squarepants",
        "salary": "$70,000",
        "department": "Software Development"
    },

    {
        "employeeID": 48,
        "firstName": "Kanye",
        "lastName": "West",
        "salary": "$100,000",
        "department": "Entertainment"
    },

    {
        "employeeID": 1,
        "firstName": "Taylor",
        "lastName": "Swift",
        "salary": "$100,000",
        "department": "Entertainment"
    }
];

app.get("/", (req, res) =>{
    res.send("Welcome to Company")
})

app.get("/employees", (req, res) =>{
    res.send(employees);
});

app.get("/employees/:id", (req, res) => {
    let test = req.params.id;

    let employee = employees.find(worker => worker.employeeID === parseInt(test));

    (!employee) ? res.status(404).send('This person is not listed as an employee'):
    res.send(employee);
});