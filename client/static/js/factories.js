/**
 * Created by andyf on 1/22/17.
 */

app.factory('loginFactory', function ($http) {
    var factory = {};

    var user = {};

    // Register method
    factory.register = function(input, callback){
      $http.post('/reg', input).then(function(output){
        console.log("we made it back");
        callback(output);
      });
    }


    // Login method
    factory.login = function(input, callback){
      $http.post('/login', input).then(function(output){
        console.log("we made it back");
        callback(output);
      });
    }

    // Setter for user object
    factory.setUser = function(data, callback){
      user = data;
      callback();
    }

    // Getter for user object
    factory.getUser = function(callback){
      callback(user);
    }




    return factory;
});




app.factory('wallFactory', function($http){
  var factory = {};

  factory.submitNewMessage = function(input, callback){
    $http.post('/messages/new', input).then(function(output){
      console.log("we just added a new message");
      callback(output.data);
    });
  }
  factory.submitNewComment = function(input, callback){
    $http.post('/comments/new', input).then(function(output){
      console.log("we just added a new comment");
      callback(output.data);
    });
  }

  factory.getAllMessages = function(callback){
    $http.get('/messages/all').then(function(output){
      console.log("we just got all messages");
      callback(output.data);
    });
  }




  return factory;
});
