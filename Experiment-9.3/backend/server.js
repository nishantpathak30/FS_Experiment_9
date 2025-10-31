const express = require('express');
const cors = require('cors');
const healthcheck = require('./healthcheck');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// healthcheck for ALB
healthcheck(app);

// sample API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!', instance: process.env.INSTANCE_ID || 'local' });
});

// static file route (optional) - not used when frontend served from nginx or separate EC2
// app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
