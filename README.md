**Read in other languages: [Українська](README.uk.md).**

## 🚀 "Rick and Morty Viewer"

![Rick and Morty Viewer](https://rickandmortyapi.com/api/character/avatar/11.jpeg)

is a web application that allows you to explore information about characters
from the popular TV series "Rick and Morty." This application provides a
user-friendly interface to view characters, search for detailed information
about them, and use filters to find specific characters from a vast list. It
also includes a history feature to track your interactions.

## 🚀 Features

- Character List: View a comprehensive list of characters from the "Rick and
  Morty" series.
- Character Details: Access detailed information about a specific character by
  clicking on their name.
- Filter Characters: Use filters to quickly locate a particular character based
  on specific criteria.
- History Tracking: The application tracks your interactions and allows you to
  view your search history.

API Documentation:
[Rick and Morty API Documentation](https://rickandmortyapi.com/documentation/)

## 🛠 Technologies

The "Rick and Morty Viewer" is built using the following technologies:

- TypeScript
- React
- Redux Toolkit and Redux Thunk (for state management and middleware)
- React Router (for routing)
- GraphQL (for making API requests)
- React Hook Form and Yup (for form handling and validation)
- Material UI (for UI components)
- ESLint and Prettier (for code validation and formatting)

## 👩‍💻 Technical Aspects

### Pages

1. **Home Page**: Contains the following elements:

   - List of all characters from the series.
   - Filter, pagination, and a floating action button (FAB) in the bottom right
     corner.
   - The FAB provides two options: "History" and "Download."
   - The "History" option opens a drawer displaying the search history
     (parameters used for filtering).
   - The "Download" option allows you to download a .csv file containing
     characters that match the current filter criteria.

2. **Character Details Page**: Accessed by clicking on a character's name. The
   page displays detailed information about the character.

### Filtering

- The filter block contains a select element with options: "Character,"
  "Location," and "Episode."
- When selecting an option, corresponding input fields appear for filtering.

### Search History

- All search actions are recorded in the history.
- By click on history item you can go to the specified page.

## Getting Started

To use "Rick and Morty Viewer", you must have Node.js and npm installed on your
computer.

- Clone the repository and install the dependencies:

       git clone https://github.com/VVr17/rick-and-morty
       cd rick-and-morty
       npm install

- After installing the dependencies, start the development server:

        npm start

- To build the production-ready version of the application, run: npm run build

# Enjoy using "Rick and Morty Viewer"!
