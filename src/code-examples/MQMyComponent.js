const mqCSS = `
.MyComponent {
  background: white;

  @media (min-width: 321px) {
    background: green;
  }

  @media (min-width: 576px) {
    background: blue;
  }
}
`;

const cqCSS = `
.MyComponent { // ⬅️ The "container"
  background: white;

  @container (width > 320px) {
    background: green;
  }

  @container (width > 575px) {
    background: blue;
  }
}
`;

const js = `
// MyComponent.js
import { withContainerQuery, ContainerQuery } from '@zeecoder/react-container-query';
import "./MyComponent.pcss";
import stats from "./MyComponent.pcss.json";

// With the Higher-Order Component
const MyComponent = () => <div className="MyComponent"> ... </div>;

export default withContainerQuery(MyComponent, stats);

// With render-props
const MyComponent = () => (
  <ContainerQuery
    stats={stats}
    render={size => <div className="MyComponent"> ... </div>}
  />
);

export default MyComponent;
`;

const webpackConfig = `
// webpack.config.js

// ...
module: {
    rules: [
        {
            test: /\\.pcss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
    ],
}
// ...
`;

const postCssConfig = `
// postcss.config.js
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const mediaMinmax = require('postcss-media-minmax');
const containerQuery = require('@zeecoder/postcss-container-query');

module.exports = () => ({
    plugins: [
        nested({ bubble: ['container'] }),
        autoprefixer(),
        mediaMinmax(),
        containerQuery()
    ]
});
`;

export { mqCSS, cqCSS, webpackConfig, postCssConfig, js };
