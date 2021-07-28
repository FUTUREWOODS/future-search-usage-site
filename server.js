const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express();

  server.use( '/*', function( req, res, next ){
    if(req.query.type){
      res.cookie("type", "trial", {maxAge: 2629800000});
    };
    if(req.query.plan){
      res.cookie("type", "trial", {maxAge: 0});
    };
    next();
  });

  server.get('/mail_templates', (req, res) => {
    console.log(req)
    const actualPage = '/mail_templates/index';
    app.render(req, res, actualPage);
  });

  server.get('/mail_templates/:id', (req, res) => {
    const actualPage = '/mail_templates/show';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });


  server.get('/search_cases/show#:id', (req, res) => {
    const actualPage = '/search_cases/show';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/documents/:slug', (req, res) => {
    const actualPage = '/documents';
    const queryParams = { slug: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/', (req, res) => {
    const actualPage = '/';
    app.render(req, res, actualPage);
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})