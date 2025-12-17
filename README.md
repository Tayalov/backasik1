Assignment #1 — Building Your First Express API (GET, POST, PUT,
DELETE) with JSON Storage
1. *Introduction*

This report describes the development of a simple backend application using Node.js and Express.
The purpose of this assignment was to understand how to create an Express server, implement REST API routes, store data in a JSON file, and test all endpoints using Postman.

2. *Project Setup*

First, a project folder was created.
Then, the Node.js project was initialized using the command npm init -y.
After that, Express was installed with the command npm install express.
A main server file called server.js was created to run the application.

3. *Server Implementation*

A basic Express server was implemented in server.js.
The server includes middleware app.use(express.json()) to handle JSON request bodies.

The following demo routes were implemented to test the server:

GET / — returns the text "Server is running"

GET /hello — returns JSON { message: "Hello from server!" }

GET /time — returns the current server time

GET /status — returns status 200 OK with a text or JSON response

These routes confirm that the server works correctly.

4. *JSON Data Storage*

A file named data.json was created to store application data.
The file contains a JSON array and is used as a simple database for the project.
All CRUD operations read data from and write data to this file.

Example structure:

{
  "objects": []
}

5. *CRUD API Implementation*

For the CRUD functionality, a custom object type Tasks was selected.
Each task includes at least the following fields:

id (auto-increment number)

name (string)

Additional fields can be added if needed.

The following CRUD routes were implemented:

GET /tasks — reads all tasks from data.json and returns them as JSON

POST /tasks — creates a new task using data from the request body

PUT /tasks/:id — updates an existing task by its ID

DELETE /tasks/:id — removes a task from the list and returns { success: true }

If a task with the specified ID does not exist, the server returns a 404 Not Found response.

6. *Testing With Postman*

All API routes were tested using Postman.
The following requests were successfully tested:

GET all objects

POST a new object

PUT update an object

DELETE an object

The responses matched the expected results, and all changes were correctly saved in the data.json file.

7. *Submission Requirements*

The completed project was uploaded to GitHub.
The repository includes the following files:

server.js

data.json

package.json

README.md

The README file contains a project description, installation steps, instructions to run the server, a list of API routes, and example Postman requests.

8. *Summary*

This report describes the development of a simple backend application using Node.js and Express.
The main goal of the project was to create a REST API that supports basic CRUD operations.
Data is stored in a local JSON file and is accessed using GET, POST, PUT, and DELETE methods.
Several test routes were implemented to check server functionality.
All API endpoints were tested using Postman, and the server worked correctly.
