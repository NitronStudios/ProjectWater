const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`\nAWG Website is running!`);
  console.log(`Open in browser: http://localhost:${port}`);
});
