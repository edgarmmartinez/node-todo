var Hashrank = require('./models/hashrank');
var Todo = require('./models/todo');

function getHashranks(res) {
    Hashrank.find(function (err, hashranks) {

        console.log("server side: " + hashranks);
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(hashranks);    // return all hashranks in JSON format
    })
    .sort({"_id":-1})
    .limit(1);
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/hashranks', function (req,res) {
        // get ranked hashtag list from mongoose
        //console.log(req);
        getHashranks(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
