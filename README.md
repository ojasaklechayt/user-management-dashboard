# User Management Dashboard

Welcome to the User Management Dashboard! This web application allows users to manage user accounts, including creating, editing, and deleting profiles. The project consists of a client-side frontend built with React and a backend server running on Node.js/Express, utilizing MongoDB for data storage.

## Features

- View a list of users
- Add new users to the system
- Edit existing user information
- Delete user profiles
- Responsive UI for mobile and desktop

## Project Structure

The project is divided into two main parts: **Frontend** and **Backend**.

- **client/**: Contains all the frontend-related code, including React components, pages, styles, and assets.
- **server/**: Houses the backend API, which includes routes, controllers, and database interactions.

## Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js and npm
- MongoDB for database management

## Setup Instructions

### 1. Clone the repository

Clone the project to your local machine:

```bash
git clone https://github.com/ojasaklechayt/user-management-dashboard.git
```
### 2. Install dependencies

Navigate to the project directory and install dependencies for both frontend and backend:

```bash
cd user-management-dashboard
npm install
```

### 3. Set up environment variables

For the backend, create a `.env` file in the `server` directory and configure the database connection and other necessary settings:

```env
DB_URI=mongodb://localhost:27017/user-management
PORT=5000
```

### 4. Start the development server

- For the **client** (React frontend):

  ```bash
  cd client
  npm start
  ```

  This will start the React app on `http://localhost:3000`.

- For the **server** (Node.js backend):

  ```bash
  cd server
  npm start
  ```

  The backend server will run on `http://localhost:5000`.

### 5. Visit the Application

Once both the frontend and backend are running, you can view the application in your browser at:

```url
http://localhost:3000
```

## Folder Structure Overview

- **client/**
  - **components/**: Reusable React components such as buttons, forms, and tables.
  - **pages/**: Different pages like the user list and account creation.
  - **styles/**: CSS or SCSS files for styling.
  - **assets/**: Static files like images and icons.
  
- **server/**
  - **controllers/**: Logic for API routes.
  - **models/**: Database models defining user schema.
  - **routes/**: API routes (GET, POST, PUT, DELETE) for managing users.
  - **config/**: Configuration files (e.g., database URI, environment variables).

- **generate.js**: Main entry point that initializes and connects both client and server.

## API Endpoints

The server provides the following API endpoints for user management:

- **GET /api/users**: Fetch all users.
- **POST /api/users**: Add a new user.
- **PUT /api/users/:id**: Update an existing user.
- **DELETE /api/users/:id**: Delete a user.

## Development Guidelines

- **Frontend**: The client-side should be modular, with each page or component placed in its own directory.
- **Backend**: Organize API routes by their respective controllers and ensure they are RESTful.
- Use reusable components and keep styles modular for easier maintenance.
- For database interaction, use MongoDB and define clear models with Mongoose.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
