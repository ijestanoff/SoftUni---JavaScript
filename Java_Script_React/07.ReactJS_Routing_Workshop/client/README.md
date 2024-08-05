# games-play-may-2024

## 1. Initialize Project
 * Initialize git repo
 * Add softuni practice server
 * Add base vite react project as client
 * CleanUp client
 * Add project resources
 * Convert html to jsx
 * Separate html into components
## 2. React Router
 * Install react-router-dom
 * Setup react-router-dom
 * Add router in App.jsx
 * Add links in the navigation
## 3. Create Service Layer
 * Service layer architecture
 * Abstract requester
 * Add games API
 * Preseed practice server
## 4. Page Implementations
 * Game List
 * Details
  * Details link
  * Details route
  * Api function - get one
 * Home - Latest Games
## 5. Commnets
 * Create service for nested resource `commnets`
 * Post comment to server
 * Read comments from server
 * Update comments in the component
 * Add comments in the component
 * Clear form
## 6. API Hooks
 * Form hook
 * Game API Hooks
 * Comments Hooks
## 7. Authentication
 * Auth API
  * Login
  * Register
  * Logout
 * Auth API hook
  * Login hook
  * Register hook
  * Logout hook
  * Authorized request
 * Auth state & context
 * Token management
 * Login
 * Register
  * Add form validation
 * Logout
 * Authorized Requests
## 8. UI Implementation
 * Dynamic Navigation
 * Create game
  * Api function
  * Hook
 * Latest games 
 ## 9. Refactoring
  * Extract auth state from App component
  * Persist auth state
  * Comments
   * Create new comment
   * Show all comment
 * Refactored comments with useReducer
 * Edit and delete ownership rendering
 * Add route guards
 
 URL:
     http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3

     seedData line 1341 -> server.js for data

App.js layouthing and routes
Wrapper function -> function that wraps another function

Catch error 403 forbiden when create games with invalid token

check props with any component

When component renders?
    1. Initial Render (mount)
    2. When parent renders
    3. Props changed
    4. useState changed
    5. useReducer changed

"Function Component": {
		"prefix": "comp",
		"body": [
			"export default function ${1:Component}() {",
			"	return (",
			"		$2",
			"	);"
			"}"
		],
		"description": "Create function component"
	}