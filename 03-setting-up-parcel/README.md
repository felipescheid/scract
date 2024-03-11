## Setting up Parcel

Parcel is a lightweight bundler with minimal configuration. We want to use it so that we can 1) develop our app by breaking down our React components into separate files and 2) using parcel to bundle these files and build our app. We will also use parcel as our hot-reloading dev server. Now both the `index.html` file and the `.jsx` files will live in the `src` directory. Parcel will build our app and generate the output files in `dist`. Now I will add this `dist` directory to `.gitignore`. We want to commit the source code only - Parcel does not need anything else.

## Usage

`npm run serve-03` to start the dev server
`npm run build-03` to build the production bundle. You can access it on the `dist` folder in the parent directory
