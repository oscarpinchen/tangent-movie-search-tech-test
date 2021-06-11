### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Coding Time

This app was made over the space of three days.

### Things I would continue to develop with more time:

- Would include an 'Add to Top Films' functionality so that the top films list wasn't just a static list of pre-determined films
- Would make it so that clicking on any of the top films would call the API and display more information about them
- I would like to add some kind of suggestion/auto-complete feature for users as they enter films into the input area. At the moment, the API is dependent on film titles being entered very precisely. For example, in one of my tests, I found that 'Mamma Mia' doesn't return a film but 'Mamma Mia!' with an exclamation mark does. In another experiment, I found that entering 'Godzilla' would only return the recent 2014 Legendary Pictures version even though there are at least three other versions that it would hypothetically return, including the 1954 Toho Studios original. A few other films with multiple releases under the same title that I tried suffered from this issue also. I suspect that a suggestion/auto-complete feature would overcome this issue.
- Alternatively to the method mentioned above, the app might benefit from an option to search for a film via an IMDB ID number
- Would include an error catch for failed API requests, including a way to display this to users
- Add a theme switch function for users who prefer dark-mode
- Expand upon the current styling, including inclusion of animation to add visual interest to the page
