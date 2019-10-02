var express = require('express'),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    routes = require('./routes');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

app.set('port', process.env.POST || 8080);

app.use(routes);

//error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
        message: err.message,
        error: {}
    }});
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});