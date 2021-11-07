const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  //route

        app.use('/news', newsRouter);

                         app.use('/', siteRouter);

  // app.post('/', (req, res) => {
  //     console.log(req.body.q)
  //     res.send(req.body.q)
  // })
}

module.exports = route;
