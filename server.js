// server.js

const express = require('express');
const app = express();

// Force the app to run on https (port outward port 443)
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
}

// Actually use SSL
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));


//Get index.html (homepage)
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);