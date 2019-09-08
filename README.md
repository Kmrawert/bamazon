# bamazon
HW12

PURPOSE
The Bamazon app helps track a small business's inventory, including the stock quantity, customer price, and other product details. This application will help owners to track the inventory products and let customers know if the item is in stock. 

HOW TO CREATE
First set up a file structure to support the application: 
- create a js file for the main functionality of the app (can be empty for now).
- In Terminal, create/initialize a JSON file to house the modules necessary to run the app.
- In Terminal, NPM install (i) both Inquirer and MySQL packages. 
- create a .gitignore file, and include node_modules, if you're using github, so the above modules are not uploaded into your project. 

Once the file structure is complete, create a working database using MySQLWorkbench: 
I used the following text to create my database, table, and fields within the table. 
    CREATE DATABASE bamazon;
    USE bamazon;
    CREATE TABLE products (
    item_id INT auto_increment PRIMARY KEY,
    product_name VARCHAR (100) NOT NULL,
    dept_name VARCHAR (100) NOT NULL,
    cust_price DECIMAL(10,2) NOT NULL,
    stock_quantity INT (10) NOT NULL
    );
    SELECT * FROM products;

Once you have your table set up correctly, input the information you need to into the table using a similar format in MySQLWorkbench as below: 
- INSERT INTO products (product_name, dept_name, cust_price, stock_quantity)
- VALUES ("sunglasses", "apparel", 14.50, 10), ("salad", "grocery", 6, 8), ("strawberry ice cream", "grocery", 5, 15);
*This should be the final step using MySQLWorkbench, unless you need to continue adding data in the future. 

Creating the application interface using NPM modules: 
- refer to the modules you're using with the following code: 
    require('dotenv').config(); --- requires dotenv package/module
    var mysql = require("mysql"); --- requires mysql package/module
    var inquirer = require("inquirer"); --- requires inquirer package/module
    var keys = require("./keys.js"); --- stored password into a javascript file, that my .env file exports to. Must require this here for the file to use fs package/module for root file to receive password. 
    var password = process.env.SECRET; --- created new variable to pass into the connection with secure password. 


Creating connection

example of code with notes

var connection = mysql.createConnection({
    //create connection variable to establish connection to mySQL Workbench with database.
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: password,
  //variable created/stored above
  database: "bamazon"
  // name of your database

//call your connection variable and create function to throw error if issue connecting.
connection.connect(function(err) {
  if (err) throw err;
  // run the start function (specific to my program that houses inquirer activity directed to the user in node) after the connection is made to prompt the user
  start();
});
});

Start Function that allows user to select item to purchase
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        //establish connection to your table within your database to pull data from, and throw error message if connection cannot be made
        if (err) throw err;
    inquirer
    //call inquirer to begin user prompts below
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          //using list to display items in database
          choices: function() {
            var choiceArray = [];
            //using array to house items, and for loop below to cycle through all items in array. Within for loop is the push method which displays all items in the return. 
            for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
            } 
            return choiceArray;
          },
          // message is what the user sees and answers. 
          message: "What item would you like to purchase?"
        },
        {
          name: "bid",
          type: "input",
          //input allows the user to type in a response. Would like to add a validation method to this prompt as well. 
          message: "How many of the item do you want to buy?"
        }
      ])
      

HOW TO USE