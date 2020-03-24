var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3001);
var dotenv = require('dotenv');
var basicAuth = require('express-basic-auth');
var compression = require('compression');

if (!process.env.NODE_ENV) {
  // Read .env to properly set `process.env`
  dotenv.config({
    'path': './.env'
  });
}

var env = {
  'development': process.env.NODE_ENV === 'development',
  'production': process.env.NODE_ENV === 'production'
};

app.use(express.static('public'));
app.set('views', './src/server/views');
app.set('view engine', 'ejs');
app.disable('x-powered-by');

if (process.env.COMPRESSION_ENABLED === 'true') {
  app.use(compression());
}

if (process.env.IS_PASSWORD_PROTECTED === 'true') {
  const envUser = process.env.ENV_USER;
  const envPassword = process.env.ENV_PASSWORD;

  app.use(basicAuth({
    users: {
      [envUser]: envPassword
    },
  }));
}

app.get('*', function(req, res) {
  console.log(req)
  res.render('index', {
    'env': env
  });
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  }
  console.log("Listening on port: ", port)
});
