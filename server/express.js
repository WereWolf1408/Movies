const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { matchPath } = require('react-router-dom');
const app = express();
const { Routers } = require('../src/SSR/Routers');

const routes = require('./routes');

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('*', async (req, res) => {
  const matchRoute = routes.find((route) => matchPath(req.originalUrl, route.path));
  console.log('------->match router');
  console.log(matchRoute);
  console.log(req.originalUrl);
  console.log('-----------------------');

  let componentData = null;
  if (typeof matchRoute?.fetchData === 'function') {
    try {
      componentData = await matchRoute.fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
    encoding: 'utf8',
  });

  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <Routers {...componentData} />
    </StaticRouter>
  );

  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );

  indexHTML = indexHTML.replace(
    'var initial_state = null;',
    `var initial_state = ${JSON.stringify(componentData)};`
  );

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

app.listen('9000', () => {
  console.log('Express server started at <http://localhost:9000>');
});
