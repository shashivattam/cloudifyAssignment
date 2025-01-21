1) Overview

This is a React application that implements a table with dynamic rows. The table contains two columns:

Single Select Dropdown: A dropdown to select an option from a predefined list. Once an item is selected, it will be disabled for subsequent rows.
Multi Select Dropdown: A dropdown allowing users to select multiple options from a list. Users can also add new options to this list dynamically.
Additionally, a button is provided at the bottom of the table to add new rows. Each new row contains both dropdowns for the user to make selections.

2)Features

Column 1 (Single Select Dropdown):

Allows the user to select one option from a list.
Once selected, the option becomes disabled in other rows.
Column 2 (Multi Select Dropdown):

Allows the user to select multiple options.
Includes an input field to dynamically add new options to the dropdown list.
Add New Row Button:

Adds a new row to the table with empty dropdowns, allowing users to make new selections.
Technologies Used
React
JavaScript (ES6+)
CSS (for styling)
Installation


Clone the repository to your local machine: 
git clone 


File Structure 

/react-dropdown-table
│
├── /src
│   ├── /App.js         # Main React component
│   ├── /App.css        # CSS file for styling
│   └── /index.js       # Entry point for React
│
└── /public
    └── index.html      # HTML template for the app


Components:
App.js: Contains the main logic for managing rows, dropdowns, and state updates.
App.css: Contains the styling for the table, dropdowns, buttons, and layout.
index.js: Renders the App component in the browser.



githubUrl : 