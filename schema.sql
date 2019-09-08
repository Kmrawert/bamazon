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

USE bamazon;
INSERT INTO products (product_name, dept_name, cust_price, stock_quantity)
VALUES ("sunglasses", "apparel", 18, 15), ("stationary set", "office", 10, 10), 
("wedge sandals", "apparel", 40, 25), ("goldfish crackers", "grocery", 3, 8), 
("distressed denim", "apparel", 80, 5), ("contact lens solution", "personal", 3, 15), 
("chopped salad", "grocery", 6, 8), ("gift bag", "office", 4, 10), 
("soft laptop case", "office", 20, 4), ("gerber daisy", "garden", 12, 3);
SELECT * FROM products;