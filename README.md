# Node Task API
In This App, a User can be able to add tasks/todos and keep track them. For Security Purposes, authentication is also added, to make User have the best experience
### Installation
To install all packages run `npm install` command
### Starting the Server
To Start the development Server run `npm run dev` command
### Usage
* **POST /users/** <br />
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
* **POST /users/login** <br />
  This Route is used for Login. Enter the login credentials that you have used when you signup
  ```
  {
    "name":"reddymouni@gmail.com",
    "password":"****"
  }
  ```
* **GET /users/me** <br />
  This route is used to get the profile details of a authenticated User. 
* **PATCH /users/me** <br />
  This route is used for updating the data such as name, email, password of a authenticated User.
* **DELETE /users/me** <br />
  This route deletes the User, and also this router delete the all corresponding tasks related to this User.
