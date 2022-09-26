const universityRoutes = (app, fs) => {
    const dataPath = './data/universities.json';
  
    app.get('/universities', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = universityRoutes;