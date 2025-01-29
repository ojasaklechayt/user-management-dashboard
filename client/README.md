# Client Folder - User Management Dashboard

The `client` folder contains the frontend code for the User Management Dashboard. It is built using React and styled using CSS/SCSS.

## Folder Structure

- **src/**
  - **components/**: Reusable React components (e.g., buttons, forms, tables).
  - **pages/**: Different views/pages of the application, such as user list and account creation.
  - **styles/**: CSS or SCSS files for styling the app.
  - **assets/**: Static files like images, icons, and fonts.
  - **App.js**: The root component that ties everything together.
  - **index.js**: The entry point for the React app, where it’s rendered into the DOM.

## Setup

1. Navigate to the `client` folder:

   ```bash
   cd client
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. To run the client in development mode:

   ```bash
   npm start
   ```

4. The React client will be running on `http://localhost:3000`.

## Development Guidelines

### Components
- Components should be small, reusable, and focused on a single task.
- Use prop drilling or React Context for passing data and managing state across components.
- Keep styles scoped within components for better reusability.

### Pages
- Each page should correspond to a unique URL and should be placed in the `pages` folder.
- Use **React Router** for handling navigation between pages.

### Styling
- We recommend using **CSS Modules** or **Styled Components** to keep styling scoped to individual components.
- Follow the BEM (Block, Element, Modifier) methodology for class names to maintain readability.

## Commonly Used Libraries

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing between different views/pages of the application.
- **Axios**: To make HTTP requests to the backend API.
- **Styled Components** (if used): For writing CSS directly within components.

## API Integration

The frontend communicates with the backend through the following endpoints:

- **GET /api/users**: Fetch all users.
- **POST /api/users**: Add a new user.
- **PUT /api/users/:id**: Update an existing user's details.
- **DELETE /api/users/:id**: Delete a user.

API requests are made using **Axios** in the React components. Ensure the correct API endpoint is used when fetching or submitting data.

## License

This folder is part of the User Management Dashboard project, which is licensed under the MIT License.
