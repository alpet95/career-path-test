# Career Path Test | React App

Career Path Test is a React-based application designed to assist users in discovering suitable career paths based on their responses to a series of questions.

## Installation

To get started with the app, follow these steps:

Clone the repository, run `npm install` to install dependencies and `npm start` to run the project on localhost. Open http://localhost:3000 with your browser to see the page.

## Usage

As a user who has never completed the test before, you can start the test by entering your name and clicking the _Start Test_ button. You will be presented with a series of questions. Select the answer that best describes you and click _Next_ to proceed to the next question. Once you have answered all the questions, click _Finish_ and you will be presented with a banner that displays the date of your completed test.

As a user who has completed the test before, you can enter your name and click the _Start Test_ button. You will be presented with a banner that displays the date of your completed test.

## Technologies & Tools

The app uses the following technologies and tools:

1. TypeScript: **typescript**. The app is written in TypeScript, which adds static typing to JavaScript. The _types_ folder contains necessary type definitions and interfaces to ensure type safety throughout the app code.
2. React Query: **@tanstack/react-query**. This library is used to handle data fetching and management. It simplifies the process of making queries to fetch questions or submissions, as well as posting new submissions. To keep the code logic clean and easy to understand, a custom hook called _useAPIQuery_ is created, which utilises the `useQueries` method.
3. Redux Toolkit: **@reduxjs/toolkit and react-redux**. These libraries are used for state management. They are responsible for storing the answers provided by the user and posting them to the API. Additionally, they handle states that for displaying specific UI components, such as the completed test panel, the _Finish_ button and the progress bar. The _store_ folder contains the Redux store, reducers, and actions.
4. React Router: **react-router-dom**. This library is used to handle search parameters, particularly the URL query `?user=`. It's responsible for displaying the data for the user based on the current URL.
5. Tailwind CSS: **tailwindcss**. This framework is used for styling the app. The _tailwind.config.js_ file contains the configuration for the app.

## Folder Structure

The app is structured in separate folders to improve organization and maintainability:

- **assets**: Contains fonts used in the app.
- **components**: Contains interface and layout related components
- **data**: Stores information about cards.
- **pages**: Stores the code for routes. In this app, there is only one route - _Home_.
- **store**: Contains the code for Redux state management.
- **types**: Contains TypeScript types and interfaces.
- **utilities**: Contains custom hooks, such as _useAPIQuery_ , and helper functions.

## What Could Be Improved

- **Design**: The current structure of the app is quite basic. It's responsive on desktop and tablet screens. Providing Figma designs or creating more advanced visual elements can greatly improve the overall user experience.
- **Loading & Error Handling**: Currently, the app uses a basic paragraph to handle loading and error states. In the future, it would be helpful to create separate components for handling loading and error.
- **Questions**: The app currently displays questions one by one without any animations or transitions. In the future, it would be useful to add Swiper JS or the other library to make the questions card change transition smoother.
- **Testing**: The app currently doesn't have any tests. In the future, it would be useful to add unit tests to ensure the app works as expected.

## Contact

Created by [@alpet95](https://github.com/alpet95) - feel free to contact me!
