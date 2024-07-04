// server/routes/flickr.js
const express = require('express');
const router = express.Router();
const FLICKR_PUBLIC_FEED_URL = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

router.get('/public', async (req, res) => {
  try {
    const response = await fetch(FLICKR_PUBLIC_FEED_URL);
    const jsonRes = await response.json();
    res.json(jsonRes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Flickr' });
  }
});

router.get('/search', async (req, res) => {
  const { tags } = req.query;
  if (!tags) {
    return res.status(400).json({ error: 'Tags parameter is required' });
  }

  try {
    const response = await fetch(`${FLICKR_PUBLIC_FEED_URL}&tags=${tags}`);
    const jsonRes = await response.json();
    res.json(jsonRes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Flickr' });
  }
});

module.exports = router;
