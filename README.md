This project is a code challenge completed for a job interview with NWEA.

Project was created within Webstorm and bootstrapped with Create React App.

To run this project: 

### `npm start`

This will run app in development mode.

[http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Someone could build the project if they would like for a production mode operation
however I didn't know if it was necessary for a panel interview? I left the stock notes below just in case!

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


-----------------------------------------

3rd Party Libraries used:

- Material UI (@mui/material, @emotion/react, and @emotion/styled)
  - In this case I mainly used it for basic styling i.e. card components for easy display of data! It also includes a built-in feature for displaying Breadcrumbs which is nice. 
  - With some projects MUI can make it easy to have consistent styling in line with a mockup as well as provide some reusable features that can speed things up for a developer. 
  - Ultimately in this case, the library is essentially a luxury to make things easier to write up quickly.
- React-Router-Dom/React-router
  - This library is what I often use for multipage navigation in React, it makes it simple and easy to switch between different pages. This challenge could have been technically 
  - completed as one singular page component, but I wanted to have some separation between them in this case since it makes the breadcrumbs make more sense as a feature to me if one is 
  - drilling-down in this manner!