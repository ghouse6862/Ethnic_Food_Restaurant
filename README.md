# Ethnic_Food_Restaurant
This project was done as part of my CS6314 Web Programming Languages course

## Project Description:
1. Implemented a UI where a user can log in, view, and place orders for food items.
2. The user can also search for food items by any of the categories, price, name, and add them to their cart.
3. Also provided the admin functionalities where the administrator can log in with an authorized account and can insert, update, or delete the food items.

## Database Design:
The following collections were created:<br />                                                                                  1. <strong>Users:</strong> This collection is used to store information about all the registered users. It consists of the following fields:
1.1 name: Stores the name of the user <br />
1.2 email: Stores the email id of the user<br /> 
1.3 phnno: Stores the phone number of the user<br /> 
1.4 password: Stores the hashed password of the user<br /> 
1.5 isAdmin: Stores boolean value to indicate whether a user is admin or not.<br />
1.6 currentToken: Stores the current authentication token of the user if is logged in otherwise stores null.<br /> 

2. <strong>Products:</strong> This collection is used to store information about all the products available in the restaurant. It consists of the following fields:<br /> 
2.1 productName: Stores the name of the product.<br /> 
2.2 description: Stores the description of the product.<br />  
2.3 category: Stores information about the category to which the product belongs.<br />
2.4. price: Stores the price of the product.<br />  
2.5. qty: Stores the quantity of product available in the inventory.<br /> 
2.6 image: Stores the image of the product<br />  
2.7 isDeleted: This field is used to implement soft-delete.<br />  

## Languages/frameworks:
The following languages/frameworks were used in the project: <br />  

Front-end: HTML, CSS, JavaScript, React.js  <br />  
Back-end: Node.js, Express.js <br />  
Database: MongoDB <br />  


