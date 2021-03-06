import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

export default () => {
    const content = renderToString(
        <App />
    );

    return `
    <html>
      <head>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};