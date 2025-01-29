# Server Folder - User Management Dashboard

The `server` folder contains the backend logic for the User Management Dashboard. It is built using Node.js and Express, with MongoDB for data storage.

## Folder Structure

- **controllers/**: Contains functions that handle the logic for each API route (e.g., creating, updating, or deleting users).
- **models/**: Defines the database models and schemas using Mongoose. The `User` model contains the user details.
- **routes/**: Contains API routes for managing users, such as creating, fetching, updating, and deleting user data.
- **config/**: Configuration files, including database URI and environment variables.

## Setup

1. Navigate to the `server` folder:

   ```bash
   cd server
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory to store environment variables (e.g., database URL, server port):

   ```env
   DB_URI=mongodb://localhost:27017/user-management
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server will be running on `http://localhost:5000` by default.

## API Endpoints

The server exposes the following RESTful API endpoints to manage user data:

- **GET /api/users**: Fetch a list of all users.
- **POST /api/users**: Add a new user to the system.
- **PUT /api/users/:id**: Update an existing user's information by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Controllers

- **UserController.js**: Contains logic for handling user-related operations such as creating a user, updating a user, deleting a user, and fetching users.

Example of a controller method to fetch all users:

```javascript
const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
```

## Models

- **User.js**: The model for the user schema, including fields such as `name`, `email`, and `role`.

Example of a user schema in Mongoose:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'user' },
});

module.exports = mongoose.model('User', userSchema);
```

## Development Guidelines

### API Routes

- Routes should follow RESTful conventions. Use **GET** for retrieving data, **POST** for creating data, **PUT** for updating data, and **DELETE** for removing data.
- Group related routes together (e.g., all user-related routes under `/api/users`).

### Controllers

- Controllers should handle the logic for API routes, including validation, database operations, and response handling.
- Keep controller methods small and focused on a single responsibility.

### Environment Variables

- Keep sensitive data (e.g., database URIs, API keys) in environment variables. These can be accessed using `process.env`.

### Error Handling

- Use proper error handling in controllers and routes to return meaningful messages and HTTP status codes.

## License

This folder is part of the User Management Dashboard project, which is licensed under the MIT License.
