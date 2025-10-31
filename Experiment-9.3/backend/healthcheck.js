// small module exposing a health-check route
module.exports = (app) => {
  app.get('/health', (req, res) => {
    // simple quick response used by ALB health checks
    res.status(200).json({ status: 'ok', time: Date.now() });
  });
};
