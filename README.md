# Github User Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Github User Search an online search engine 
dedicated to searching user profiles on GitHub and 
display work done by those users.

## Getting Started

1. Install Node v16 LTS
2. Open terminal (or cmd on windows) and run the following command to ensure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are properly installed. 
```bash
node --version
npm --version
```

To Run the application in local environment, open termimal (or cmd on windows) and run 
```bash
git clone git@github.com:claudeshyaka/github-username-searcher.git
cd ~/github-username-searcher
npm i && npm start
```

## Live Demo

Follow this [link](https://cheerful-taiyaki-d29ff3.netlify.app/) for a live demo of the application.


## Github APIs

- [GET /](https://api.github.com)
- [GET /users](https://api.github.com/users)
- [GET /users/{username}](https://api.github.com/users/claudeshyaka)
- [GET /users/{username}/repos](https://api.github.com/users/claudeshyaka/repos?per_page=50)
- [GET /users/{username}/followers](https://api.github.com/users/claudeshyaka/followers)
- [GET /rate_limit](https://api.github.com/rate_limit)

## Tech Stack

The application is developped using [React](https://reactjs.org/), [Hooks](https://reactjs.org/docs/hooks-intro.html) and [Context](https://reactjs.org/docs/context.html).
A CSS file called index.css and the CSS module [styled-components](https://styled-components.com/) are used to provide styling to React elements.

## App Dependencies

- [axios](https://axios-http.com/docs/intro)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Testing

Using [cypress](https://www.cypress.io/), end-to-end testing was applied to the application.

## Deployment

The web application is running on [Netlify](https://www.netlify.com/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



