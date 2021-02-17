# Node Task API
In This App, a User can be able to add tasks/todos and keep track them. For Security Purposes, authentication is also added, to make User have the best experience
### Installation
To install all packages run `npm install` command
### Starting the Server
To Start the development Server run `npm run dev` command
### Usage
* `strong` POST /users/
  This route is used to Signup for a User, To Signup a User, Send the JSON data in the following format
  ```
  {
    "age" : 31,
    "name" : "Reddy Mouneeeswar",
    "email" : "reddymouni@gmail.com",
    "password" : "***",
    "__v" : 0
  }
  ```
* `strong` POST /users/login
* `strong` GET /users/me
* `strong` PATCH /users/me
* `strong` DELETE /users/me
