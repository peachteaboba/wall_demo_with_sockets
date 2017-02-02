/**
 * Created by peachteaboba on 1/22/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var Message = mongoose.model('Message');

module.exports = (function() {
    return {
      getAllMessages: function(req, res){
        Message.find({}).populate([{path : '_user'},{path : '_comments', populate : {path : '_user'}}]).exec(function(err, m){
          if(err){
            console.log("there was an error when getting all messages".red);
          } else {
            console.log(m);
            console.log("successfully got all messages".green);
            res.json(m);
          }
        });
      },

      addMessage: function(req, res) {
        console.log("===========================".yellow);
        console.log(req.body);
        console.log("===========================".yellow);

        var m = new Message({content: req.body.content, _user: req.body._user})
        m.save(function(err){
          if(err){
            console.log("there was an error when saving a message".red);
          } else {
            console.log(m);
            console.log("successfully saved the above message".green);

            res.redirect('/messages/all');

          }
        })

      }


    }
})();
