# Webpack Starter Template

This is a webpack setup and configuration for future projects.

# Template Features

| Technology | Description |
| ----------- | --------- |
| Sass | This template has Sass/Sass Loader/Style Loader dev dependencies. There is a `src/styles/main.scss` starter file (with a few placeholder styles) where you can write sass rules and it will compile on build |
| HTML Template | The `dist/index.html` file is generated on build. It uses the template.html file as the template |
| Caching | Files produced by webpack remain cached unless their content has changed. The output `dist/main.js` file has an output hash in the file name. When this file changes, the file name will change. This helps with browser caching. |
| Webpack Dev Server | Run `npm run dev` to start a dev server in the browser. This will auto refresh when files are changed. It does not serve static files from dist, it serves files from memory. In other words, you should be able to delete the dist folder and still serve the app. |
| Source Map | In addition to creating a main[hash].js file in dist, webpack will generate a main[hash].js.map file as well. This helps with debugging and tracking down the line of code where the error is present." 


# Steps To Use:

1. Clone Repo
2. Navigate to project on local machine in Terminal
3. Run `npm install` to install all dependencies