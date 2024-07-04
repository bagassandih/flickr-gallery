const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const flickrRoute = require('./routes/flickr');

app.use(cors({ origin: 'http://localhost:4000' }));
app.use('/api/flickr', flickrRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});