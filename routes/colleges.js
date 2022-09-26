const collegesRoutes = (app, fs) => {
    const dataPath = './data/colleges.json';
  
    app.get('/colleges', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = collegesRoutes;