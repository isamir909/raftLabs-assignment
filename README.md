# Assignment-1 Book management 

## Project Definition

- Write software that reads the CSV data (of books, magazines, and authors) given on the next page.
- Print out all books and magazines (on either console UI) with all their details (with a meaningful output format).
- Find a book or magazine by its ISBN.
- Find all books and magazines by their authors’ email.
- Print out all books and magazines with all their details sorted by title. This sort should be done for books and magazines together.
- Add a book and a magazine to the data structure of your software and export it to a new CSV file.

## Project Setup :
- To Download the project visit: https://github.com/isamir909/raftLabs-assignment.git 
- After downloading run command `npm i` to install all dependencies.
- To run project : use command `npm run start`

## Project description :

- Created project using Node.js and express.js and used NOSQL database MongoDB
- for find operation used query params 
- csv folder is used to receive CSV files and convert it to JSON and upload into mongoDB  
- jsonToCSV folder is used to convert JSON file to csv file 


### Extra
- Added  Admin Schema who has access to add new books and magazines.
- Created POST API for Admin registration.
- Created Login API for Admin and used JWT for token generation. 
- implemented authentication while login.
- stored password in hash formate using bcrypt.



