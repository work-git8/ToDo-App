# <h1>ToDo-App</h1>

## <b>Overview</b>
The <b>ToDo-App</b> is a task management application built using <b>Flutter</b> for the frontend and <b>Node.js with Express.js</b> for the backend. The application integrates <b>MongoDB</b> as the database to store user tasks efficiently.

## <b>Features</b>
- ✅ <b>User Authentication using JSON web token </b> (Signup & Login)  
- ✅ <b>Add, Update, and Delete To-Do Tasks</b>  
- ✅ <b>Mark Tasks as Completed/Pending</b>  
- ✅ <b>Real-Time Synchronization with Backend</b>  
- ✅ <b>RESTful API Integration</b>  

## <b>Tech Stack</b>
- <b>Frontend:</b> Flutter  
- <b>Backend:</b> Node.js, Express.js  
- <b>Database:</b> MongoDB  

## <b>Setup Instructions</b>

**Database Connection (MongoDB)**

- Create a new account on MongoDB Atlas (https://www.mongodb.com/atlas).

- Set up a new cluster and create a database.

- Navigate to the Database Access section and create a new user with a username and password.

- In the Network Access section, allow access from your IP address or set it to allow all IPs (0.0.0.0/0).

- Copy the connection string from MongoDB Atlas.

- Open db.js in the backend folder and replace ```username```, ```password``` with your credentials:

 **Backend Setup**

 - Navigate to the backend folder
```cd backend```

 - Install dependencies
```npm install```

 - Start the backend server
```npm start```

**Frontend Setup**

- Navigate to the frontend folder
```cd frontend```

- Install Flutter dependencies
```flutter pub get```

- Run the Flutter app
```flutter run```

<b>API Endpoints</b>
```
POST /signup      # User Registration
POST /login       # User Authentication
GET /tasks        # Fetch All Tasks
POST /tasks       # Create a New Task
PUT /tasks/:id    # Update a Task
DELETE /tasks/:id # Delete a Task
```
