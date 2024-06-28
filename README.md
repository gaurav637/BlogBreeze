# BlogBreeze

BlogBreeze is a simple and elegant blog application where users can create, read, update, and delete blog posts. Users can sign up, log in, and manage their own blog posts. This application is built with Node.js, Express.js, MongoDB, and Bootstrap.

## Features

- User authentication and authorization (sign up, log in, log out).
- Create, read, update, and delete blog posts.
- Upload and display cover images for blog posts.
- Responsive design with Bootstrap.
- Middleware for authentication and authorization.

## Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running.

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/BlogBreeze.git
    cd BlogBreeze
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Create a `.env` file**

    ```bash
    touch .env
    ```

    Add your environment variables in `.env` file

    ```
    MONGODB_URI=mongodb://localhost:27017/blogbreeze
    PORT=9090
    SECRET=your_secret_key
    ```

4. **Run the application**

    ```bash
    npm start
    ```

    The application will start on `http://localhost:9090`.

## Usage

### 1. Sign Up

Navigate to `/user/signup` to create a new account.

### 2. Log In

Navigate to `/user/signin` to log into your account.

### 3. Create a Blog Post

Once logged in, navigate to `/blog/add-new` to create a new blog post. Fill in the title, body, and upload a cover image.

### 4. View Blog Posts

The homepage will display a list of blog posts. Click on a post to view its details.

### 5. Edit and Delete Blog Posts

You can edit and delete your own blog posts from their respective detail pages.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.






Feel free to customize this README to fit the specific details and features of your project.






