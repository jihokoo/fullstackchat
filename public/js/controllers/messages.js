angular.module('fullstackchat.controllers.messages', [])
  .controller('MessagesController', [
    '$scope',
    '$stateParams',
    '$location',
    'Global',
    'Messages',
    function($scope, $stateParams, $location, Global, Messages){
      var sock = new SockJS('/echo');

      $scope.messages = [];

      $scope.createMessage = function(){
        var newMessage = new Messages({
          content: $scope.content
        });

        newMessage.$save(function(data){
          $scope.content = ''
          $scope.temporary_messages = data
          sock.send(['$scope.temporary_messages']);
        })
      };

      sock.onopen = function() {
       console.log('open');


       };

       sock.onmessage = function(e) {
           $scope.messages.push(eval("("+e.data+")"));
           $scope.$apply();
       };

       sock.onclose = function() {
           console.log('close');
       };



      $scope.find = function(){
        Messages.query(function(messages){
          $scope.messages = messages;
        })
      }

    }])



// $scope.global = Global;

//       var sock = new SockJS('/echo')
//       $scope.messages = [];




//       // sock.onopen = function(){
//       //   console.log('open');
//       // };

//       // sock.onmessage =function(e){
//       //   console.log(e);
        // $scope.messages.push(eval("("+e.data+")"));
//       //   $scope.$apply();
//       // };

//       $scope.find = function(){
//         Messages.query(function(messages){
//           $scope.messages = messages
//         })
//       };
