const express = require('express');
const app = express();
const port = 3002;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  const results = Object.create(null);

  for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
          // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
          if (net.family === 'IPv4' && !net.internal) {
              if (!results[name]) {
                  results[name] = [];
              }
              results[name].push(net.address);
          }
      }
  }

  console.log(`\nAWG Website is running!`);
  console.log(`Local User: http://localhost:${port}`);
  
  // Log all available IP addresses
  Object.keys(results).forEach(name => {
      console.log(`On Your Network (${name}): http://${results[name][0]}:${port}`);
  });
});
