# Express App Cheat Sheet

1. Initialize project
     npm init -y
2. Nodemon 
    npm i -D nodemon
    "start": "nodemon index.js"
3. Express
    npm i express
    Start initial express server
    Add static middleware
    Add resource to public folder
    Add body parser
    Add routes module
4. Handlebars
    npm i express-handlebars
    Config handlebars with express
    Add views folder with resources
    Add home view
    Add home controller and add to routes
    Add main layout
    Add partial dir
5. Database
    npm i mongoose
    Setup DB connection
    Add user model
6. Register
    Fix navigation links
    Add register page (view, controller, route)
    Fix register form
    Add post register action
    Add authservice
    npm i bcrypt
    Hash password
    Check confirm password
    Check if user exist
7. Login
    npm i jsonwebtoken
    npm i cookie-parser
    Add cookieParser middleware
    Optionally: convert to promise based
    Add login page
    Fix login form
    Add login post action
    Add authService login method
        Validate user and password
        Generate token
    Return cookie
    Modify register for auto login
8. Logout
9. Authentication & Authorization
    Add auth middleware
    Check token guest
    Verify token
    Attach user to request objectand res.locals
    use middleware
    Add isAuth route guard
10. Error handling
    Add notifications
    Add getError message util 
    Add register error handling
    Add login error handling
11. Fixes
    Dynamic navigation
    

