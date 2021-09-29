# Restaurant_Website
This project was done as part of my CS6314 Web Programming Languages course. See it in action at https://lit-sea-51053.herokuapp.com/

## Project Description:
1. Implemented a UI where a user can log in, view, and place orders for food items.
2. The user can also search for food items by any of the categories, price, name, and add them to their cart.
3. Also provided the admin functionalities where the administrator can log in with an authorized account and can insert, update, or delete the food items.

## Database Design:
The following collections were created:<br />                                                                                  --> <strong>Users:</strong> This collection is used to store information about all the registered users. It consists of the following fields:
name: Stores the name of the user <br />
email: Stores the email id of the user<br /> 
phnno: Stores the phone number of the user<br /> 
password: Stores the hashed password of the user<br /> 
isAdmin: Stores boolean value to indicate whether a user is admin or not.<br />
currentToken: Stores the current authentication token of the user if is logged in otherwise stores null.<br /> 

--> <strong>Products:</strong> This collection is used to store information about all the products available in the restaurant. It consists of the following fields:<br /> 
productName: Stores the name of the product.<br /> 
description: Stores the description of the product.<br />
category: Stores information about the category to which the product belongs.<br />
price: Stores the price of the product.<br /> 
qty: Stores the quantity of product available in the inventory.<br /> 
image: Stores the image of the product.<br /> 
isDeleted: This field is used to implement soft-delete.<br />  

--> <strong>Orders:</strong> This collection is used to store all the orders placed by the users. It consists of the following fields:<br />
CustomerID: It is used to identify the user who placed the order.<br />
Items: It consists of the array of information about the items placed as the order.<br />
orderType: This field specifies whether the user wants to place the order for dine-in or pick-up.<br /> 
bookingTime: stores the time at which order was placed.<br /> 
totalBill: stores the total amount of the order.

## Languages/frameworks:
The following languages/frameworks were used in the project:

Front-end: HTML, CSS, JavaScript, React.js<br /> 
Back-end: Node.js, Express.js<br />
Database: MongoDB

## Dependencies:
1. You need to install node.js and npm.

2. Then navigate to main directory and run npm install to install backend dependencies.

3. Navigate to client directory and run npm install to install frontend dependencies.

## Practice