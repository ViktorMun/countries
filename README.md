Overview
Country Explorer is a React application that provides an interactive interface to explore information about countries around the world. It allows users to view a list of countries, search for specific countries, sort them by name or population, and view detailed information about each country, including images.

Features
View All Countries: Displays a list of all countries with basic information like the flag, name, capital, and population.
Search Functionality: Users can search for countries by name to quickly find what they're looking for.
Sorting Options: The country list can be sorted by name or population, helping users to organize the data as needed.
Detailed Country Information: Clicking on a country opens a detailed view, showing more information and images related to the selected country.
Responsive Design: Adapted for both desktop and mobile devices, providing a user-friendly experience across all platforms.

Technology Stack
React: Used for building the user interface and managing the application state.
Axios: For making HTTP requests to external APIs to fetch the list of countries and their details.
Styled Components: Utilized for styling the application to enhance the user experience and provide a modern look.

Setup and Installation
Clone the repository:



Copy code
### git clone https://github.com/ViktorMun/countries.git
### cd countries

Install the necessary dependencies:
### npm install

Start the development server:
### npm run vite
Visit http://localhost:5174/ in your web browser to view the application.

API Reference
REST Countries: Fetches comprehensive data about countries, including name, population, capital, and flag.
URL: https://restcountries.com/v3.1/all

Google Custom Search: Used to retrieve images for the selected country.

