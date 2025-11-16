# MERN Stack CRUD & Auth Skeleton

This is a foundational boilerplate for a MERN (MongoDB, Express.js, React.js, Node.js) stack application. It provides a clean, minimal skeleton with complete user authentication (using Express sessions) and full CRUD (Create, Read, Update, Delete) functionality.

This project is intended to be a solid starting point for building more complex, full-stack applications.

## ✨ Features

  * **Full MERN Stack:** MongoDB, Express.js, React.js, and Node.js.
  * **User Authentication:**
      * User Registration
      * User Login
      * User Logout
  * **Session Management:** Uses `express-session` to maintain user login state.
  * **Full CRUD Operations:** Demonstrates Create, Read, Update, and Delete operations for a basic data model.
  * **RESTful API:** A well-structured backend API built with Express.
  * **Separated Concerns:** A clean project structure with a `client` folder for the React frontend and a `server` folder for the Express backend.

## 🛠️ Tech Stack

  * **Frontend:** React.js
  * **Backend:** Node.js, Express.js
  * **Database:** MongoDB (with Mongoose)
  * **Authentication:** `express-session` for session management & `bcrypt.js` for password hashing.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

  * [Node.js](https://nodejs.org/en/) (v16.x or later recommended)
  * [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))
  * [MongoDB](https://www.mongodb.com/try/download/community) (a local instance) or a MongoDB Atlas connection string.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/MERN_CRUD_APP.git
cd MERN_CRUD_APP
```

### 2\. Backend (Server) Setup

1.  Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2.  Install the backend dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the `/server` directory. This file will store your environment variables.

    ```bash
    touch .env
    ```

4.  Add the following variables to your `.env` file. **Be sure to use your own values.**

    ```.env
    # MongoDB Connection String (from local instance or MongoDB Atlas)
    DATABASE_URL=mongodb://localhost:27017/your_db_name

    # A strong, random string for signing the session ID cookie
    SESSION_SECRET=a_very_strong_random_secret_key_12345

    # The port your server will run on
    PORT=5001
    ```

### 3\. Frontend (Client) Setup

1.  Open a new terminal and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2.  Install the frontend dependencies:

    ```bash
    npm install
    ```

3.  **Proxy Setup (Important):**
    To ensure the React development server can communicate with your backend API, open `client/package.json` and add the following line:

    ```json
    "proxy": "http://localhost:5001"
    ```

    (This assumes your server is running on `PORT=5001` as defined in your `.env` file).

## 🏃‍♂️ Running the Application

You will need to run both the backend server and the frontend client simultaneously.

1.  **Start the Backend Server:**

      * In your `backend` directory terminal:

    <!-- end list -->

    ```bash
    npm run dev
    ```

    *(Your API should now be running at `http://localhost:5001`)*

2.  **Start the Frontend Client:**

      * In your `client` directory terminal:

    <!-- end list -->

    ```bash
    npm run dev
    ```

    *(Your React application should automatically open in your browser at `http://localhost:3000`)*

You can now register a new user, log in, and test the CRUD functionality.
