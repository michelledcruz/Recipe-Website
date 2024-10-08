# Recipe Application
This project is a React-based recipe application that allows users to browse recipes by category and view detailed information about each recipe, including videos on how to prepare them. The app fetches data from the MealDB API and displays it dynamically in the user interface.

# Features
1. Recipe List by Category
Users can view a list of recipe categories, fetched from the API.
Clicking on a category filters the recipes displayed on the page.
Each recipe is presented with its image and name, and clicking on a recipe will take users to a detailed page for that recipe.
2. Recipe Details Page
Displays detailed information about the selected recipe.
Includes ingredients, preparation steps, and an embedded YouTube video (if available) demonstrating how to make the dish.
3. Watch Video Feature
On the recipe details page, users can click a "Watch Video" button, which directs them to a YouTube tutorial for the selected recipe.
The video icon and accompanying text are clickable, making it easy for users to view the video.
4. Responsive Navigation Bar
The application includes a navigation bar with links to different sections such as Home, Recipes, Favorites, and Contact.
The navigation bar is responsive and easy to use, making it simple for users to explore the app.
5. Dynamic Data Fetching with useEffect and useState Hooks
The app utilizes the useEffect hook to fetch data from the MealDB API and dynamically render recipes and categories.
State management is handled with the useState hook to store fetched data such as recipe categories and individual meals.
6. Implemented Search Functionality: Search recipies from api list
7. Routing with React Router
The app uses react-router-dom for client-side routing.
Users can navigate between different pages without reloading the app. Each recipe has its own URL that links to its specific details page.
8. Shimmer UI (Skeleton Loading): A shimmer or skeleton UI is shown while the recipe data is being fetched, providing a smooth user experience.

# Technologies Used
React: JavaScript library for building user interfaces.
React Router: Handles routing in the application.
CSS Modules: Styles are written as CSS modules to keep the styling modular and scoped to components.
Fetch API: For fetching data from the MealDB API.
JavaScript (ES6): Leveraging modern JavaScript features like async/await, array methods, and destructuring.
