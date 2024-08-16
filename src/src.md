# Documentation for src: src/

## 1) src/Styles

- this folder contains css for all components or pages in the application.
- the css files are imported into the respective components or pages.
- the css files are named after the component or page they are styling.

## 2) src/Components

- the application is divided into multiple components.
- this folder contains all the components used in the application.

## 3) src/Pages

- self-contained pages are placed in this folder.
- each page is a component that is rendered between the navbar and footer in place of Outlet in App.jsx.

## 4) src/Assets

- this folder contains all the images and other assets like json data used in the application.
- the assets are imported into the respective components or pages.
- currently, all the assets are client-side assets. (they are downloaded when the page is loaded)

## 5) src/main.jsx

- this file contains definition of the `navRouter` object which is used to define the routes for the application.
- for pages being rendered between the navbar and footer, routes should be inserted into the children array inside the `navRouter` object.

## 6) src/App.jsx

- this file renders the footer and the navbar, and the pages in between using the Outlet component from react-router-dom.
