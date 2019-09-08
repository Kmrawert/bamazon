require('dotenv').config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var password = process.env.SECRET;

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: password,
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
            } 
            return choiceArray;
          },
          message: "What item would you like to purchase?"
        },
        {
          name: "bid",
          type: "input",
          message: "How many of the item do you want to buy?"
        }
      ])
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions

      console.log("test worked!");
    //   if (answer.postOrBid === "POST") {
    //     postAuction();
    //   }
    //   else if(answer.postOrBid === "BID") {
    //     bidAuction();
    //   } else{
    //     connection.end();
    //   }
    // })

        });
    });
};