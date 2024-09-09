### Babel Webpack React Boilerplate

This is a Webpack boilerplate configured for a React project. It includes loaders and plugins to handle JavaScript, JSX, CSS, SCSS, images, and more. Below is a detailed explanation of the features and usage.

#### Features

- **JavaScript and JSX Support**: Transpiles ES6+ JavaScript and JSX using Babel (`babel-loader`).
- **CSS and SCSS Support**: Handles both CSS and SCSS files with automatic vendor prefixing via PostCSS and `autoprefixer`.
- **Image Optimization**: Optimizes images using `image-webpack-loader` for JPEG, PNG, GIF, and SVG formats.
- **Hot Module Replacement (HMR)**: Supports live reloading in development mode with `ReactRefreshWebpackPlugin` for React components.
- **CSS Minification**: In production mode, CSS files are minified using `css-minimizer-webpack-plugin`.
- **Autoprefixing**: Automatically adds vendor prefixes to your CSS rules for cross-browser compatibility.
- **File Hashing**: Adds hashes to image file names to ensure proper caching.

#### Installation

To get started, clone this repository and install the dependencies:

```bash
git clone <your-repo-url>
cd <project-directory>
npm install
```

To start the development server with hot reloading : ```npm run start```

To build the project for production : ``` npm run build```


##### The production build will be output to the "dist" directory, with all assets optimized and ready for deployment