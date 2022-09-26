const universityRoutes = require('./universities');
const collegesRoutes = require('./colleges');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('Welcome to West Bengal College Api');
  });

  universityRoutes(app, fs);
  collegesRoutes(app,fs);
};

module.exports = appRouter;