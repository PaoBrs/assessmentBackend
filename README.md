# Assessment Backend
![logotype-09](assets/ab.png)

# Requirements

For this pryect you will need:

- Node.js
- MongoDB
- Express
- Bcrypt
- Mongoose
- Jsonwebtoken (JWT)

~Dev Dependence 
- Nodemoon
- Jest
- Supertest

## Config

1. Clone proyect:
   ```
   $ git clone
## How does it work Users
Use: "/api/users" to create a user. <br>
Use: "/auth.local/login"
| Method | Endpoint | Action | Body
| --- | --- | --- | --- |
| POST | /api/users | Create User | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }
| POST | /auth.local/login | Login | { <br> &nbsp; &nbsp; "email": String, <br> &nbsp; &nbsp; "password" : String, <br> }
## How does it work Favs List
base route: /api/favList. Here we can proceed with different CRUD.
| Method | Endpoint | Action | Query Param | Body
| --- | --- | --- | --- | --- |
| POST | / | Create favList| | { <br> &nbsp; &nbsp; "name": String, <br> &nbsp; &nbsp; "favs" : [{ <br> title: String, <br>description: String, <br>link: String}], <br> }
| GET | / | Show all user FavLists | | { <br> &nbsp; &nbsp; "name": String, <br> &nbsp; &nbsp; "userId":ObjectId, <br> &nbsp; &nbsp;"Items"{ <br> &nbsp; &nbsp; "title": String, <br> &nbsp; &nbsp; "description" : String, <br> &nbsp; &nbsp; "link" : String <br>} }
| GET | /:id | Show one Fav List | id: String |
| POST | /api/favList/:id/add | add item to fav Lits | {}
