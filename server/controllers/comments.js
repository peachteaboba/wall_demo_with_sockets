/**
 * Created by peachteaboba on 1/22/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = (function() {
    return {
      addComment: function(req, res) {
        console.log("===========================".yellow);
        console.log(req.body);
        console.log("===========================".yellow);

        var c = new Comment({content: req.body.content, _user: req.body._user, _message: req.body._message});
        c.save(function(err) {
          if(err){
            console.log("error");
          } else {

            // We know the comment is already saved
            Message.findOne({_id: req.body._message}, function(err, oneMessage){
              if(err){
                console.log("error");
              } else {
                oneMessage._comments.push(c._id);

                // Save the changes
                oneMessage.save(function(err){
                  if(err){
                    console.log("error");
                  } else {

                    console.log("successfully saved a comment".green);
                    res.redirect('/messages/all');

                  }
                })
              }
            });
          }
        })
      }
    }
})();
