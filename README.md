# String Calculator React App

## Description

This React application provides a simple string calculator that allows users to add numbers from a string input. It follows Test-Driven Development (TDD) principles and includes features such as:

-   Handling an arbitrary amount of numbers separated by commas or newlines.
-   Supporting custom delimiters specified at the beginning of the input string.
-   Throwing an exception when negative numbers are included in the input.
-   Ignoring numbers greater than or equal to 1000.

## Usage

1.  **Clone the repository:**

    ```
    git clone <repository-url>
    cd react-typescript
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Start the application:**

    ```
    npm start
    ```

    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Functionality

The `StringCalculator` component includes the following functionality:

-   **Input Field:** A textarea where users can enter numbers separated by commas, newlines, or using a custom delimiter.
-   **Calculate Button:** Triggers the calculation based on the input string.
-   **Result Display:** Shows the result of the calculation or any error messages.

## `add` Function Rules

The `add` function in this calculator follows these rules:

-   An empty string returns 0.
-   A single number returns the number itself.
-   Two numbers, comma-delimited, returns the sum.
-   Two numbers, newline-delimited, returns the sum.
-   Three numbers, delimited either way, returns the sum.
-   Negative numbers will throw an exception.
-   Numbers greater than or equal to 1000 are ignored.
-   Custom delimiters can be defined using the format `"//[delimiter]\n[numbers]"`.

## Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm test`:  Launches the test runner in the interactive watch mode.
-   `npm eject`: Ejects the project from `create-react-app`.

## Dependencies

-   **react:** 18.2.0
-   **react-dom:** 18.2.0
-   **loader-utils:** 3.2.1

## Dev Dependencies

-   **@types/react:** 19.0.7
-   **@types/react-dom:** 18.2.15
-   **typescript:** 4.4.4
-   **@testing-library/jest-dom:** ^6.6.3
-   **@testing-library/react:** ^15.0.0
-   **@testing-library/user-event:** ^14.5.2
-   **@types/jest:** ^29.5.14
-   **jest:** ^29.7.0
-   **react-scripts:** ^5.0.1