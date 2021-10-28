This is a codebase that reproduces the issue with Next.js v12.0.1 as reported
in [Issue #30498](https://github.com/vercel/next.js/issues/30498).

This app is configured to run on port `2000`.

# Issue Overview

Running the app with different `NODE_ENV`s set produces different behaviors in the browser. In this case, the
application works as expected when running in development mode (`next dev`), renders but is unresponsive in test
mode (`NODE_ENV=test next start`) and crashes in production (`next start`).

# Steps to Reproduce

To reproduce the issue, simply visit the /about page in your web browser (http://localhost:2000/about) using the
following steps to build the app.

> Be sure to delete the `.next` directory between runs to ensure there is nothing cached

## Development Mode

The application functions as expected

1. Start the server in development mode
    ```bash
   # Using commands from package.json
   npm run dev 
   
   # Running via npx
   npx next dev
    ```
2. Check the build logs - ensure there are no errors or unexpected warnings.
3. Visit [http://localhost:2000/about](http://localhost:2000/about)
4. Click the button that says "Increase Count" and notice the displayed value increases.
5. Check the browser console. No errors.

## Test Mode

The application functions as expected

1. Start the server in development mode
    ```bash
   # Using commands from package.json
   npm run build:test && npm run start:test
   
   # Running via npx
   NODE_ENV=test npx next build
   NODE_ENV=test npx next start -p 2000    
    ```
2. Check the build logs - ensure there are no errors or unexpected warnings.
3. Visit [http://localhost:2000/about](http://localhost:2000/about)
4. Click "Increase Count" and notice that **nothing happens**.
5. Check the browser console. No errors.

## Production Mode

The application functions as expected

1. Start the server in development mode
    ```bash
   # Using commands from package.json
   npm run build && npm run start
   
   # Running via npx
   npx next build
   npx next start -p 2000    
    ```
2. Check the build logs - notice there are no errors or unexpected warnings.
3. Visit [http://localhost:2000/about](http://localhost:2000/about)
4. The page crashes with an application error
5. Check the browser console and notice there is an error thrown from `Forms.ts`, which comes form the `yup` library.