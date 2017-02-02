/**
 * Created by peachteaboba on 1/22/17.
 */

// Require the controllers
var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');
var comments = require('./../controllers/comments.js');


// Define the routes
module.exports = function(app, io) {

    io.sockets.on('connection', function (socket) {
      // RUN AS SOON AS SOCKET IS CONNECTED ----
      console.log("WE ARE USING SOCKETS!");
      console.log(socket.id);

      socket.on("updateInfo", function (data){
        // tell all the clients to update their messages info
        socket.broadcast.emit("getAllMessages");
      });







    });




    // User routes ===================================================
    app.post('/reg', function(req, res) {
        users.reg(req, res);
    });

    app.post('/login', function(req, res) {
        users.login(req, res);
    });


    // Message routes ===================================================
    app.get('/messages/all', function(req, res) {
        messages.getAllMessages(req, res);
    });
    app.post('/messages/new', function(req, res) {
        messages.addMessage(req, res);
    });


    // Comment routes ===================================================
    app.post('/comments/new', function(req, res) {
        comments.addComment(req, res);
    });




};
