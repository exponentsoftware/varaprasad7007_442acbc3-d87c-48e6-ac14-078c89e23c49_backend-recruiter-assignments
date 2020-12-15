# Backend Assignments


## TASK 1 - Tree Arrangement

![Graph](/Graph.png)

You need to create a function that accepts an array as an argument with random numbers and without any
limit.


- The length of the array will decide the number of trees, indexing will decide the sequence of the tress
and the values will decide its height. (For example, the Value with 5 will create a 5m long tree, 2 will
create a 2m long tree and so on)
- Now we have to create a zig-zag pattern out of the trees for which we can cut there length as well as
per need.
- Zig-zag pattern of the trees can start either from up-to-down and down-to-up.

### Expected :

- create such a function which provides the minimum number of cut down of trees
required in order to achieve the zig-zag pattern
- Write down the pseudo code/logic how you would solve this
- Provide a working solution in the language of your choice to achieve this

## TASK 2 - FOOD Ordering App

- Create Authentication ( Login / Signup / Reset password)
- Show list of dishes (Show Only after Login)
- Filter by Cuisines, type (Veg/Non-veg), Sub categories (Appetizer, Main Course, Dessert, Drinks)
- Add dishes to the cart.
- Show List of transactions per User.
- Pay for Product ( Use stripe payment gateway / PayPal / RazorPay / others) [ Optional ]

### Prefered Technologies

| Environment  | Framework  |
|--------------|------------|
| Backend APIs | Express Js |
| Database     | MongoDB    |
| ORM/ODM      | Mongoose   |

## TASK 3 - Writing Data to Excel

Use the Github api and based on command line input, pass query parameter to the below API:

[Github API](https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc)
User input will replace **tetris** in the above url.

- Read the above data
- Write data for each repo to Excel sheet
- only add headers - homepage, size, language, watchers, description, name, full_name
- Paginate on all records and write to Excel
 


