# Client Availability System

## Overview

The Client Availability System is a full-stack web application designed to manage client availability and event scheduling. It features a frontend built with React and TypeScript and a backend using Node.js, Express.js, and MongoDB. The application allows users to log in, view their availability, and schedule sessions with clients.

## Features

- **User Authentication**: Secure login and session management.
- **Client Dashboard**: View and manage client availability.
- **Session Scheduling**: Schedule one-on-one or group sessions.
- **Responsive Design**: Fully responsive UI for desktop and mobile.

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - SCSS/CSS
  - Axios for API requests

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - CORS for cross-origin requests

## Deployed Application

- **Frontend**: (https://clients-availability-lx6e.vercel.app)

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https:https://github.com/pk1427/clients-availability
    cd clients-availability
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the `backend` directory with the following content:

    ```
    MONGO_URI=mongodb+srv://202151115:pF6mtrbAy7mT2LIh@cluster0.epyza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd clients-availability
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. **Login**: Navigate to the login page to authenticate and access the client dashboard.

2. **Dashboard**: Once logged in, you can view and manage client availability.

3. **Session Scheduling**: Schedule sessions based on available slots.

## API Endpoints

- **POST** `/api/users/login`: Logs in a user with their email.
- **GET** `/api/users`: Retrieves a list of users.
- **GET** `/api/availability/:userId`: Retrieves availability for a specific user.
- **GET** `/api/schedule`: Retrieves scheduled sessions.
- **POST** `/api/sessions`: Creates a new session.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact:

- **Email**: prasadkapure553@gmail.com
- 
- **GitHub**: https://github.com/pk1427

