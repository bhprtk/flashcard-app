'use strict';

var app = angular.module('flashCardApp');

app.controller('homeController', function() {
  console.log('homeController');
});

app.controller('playController', function($scope, Cards) {
  Cards.getAll()
    .then(function(res) {
      $scope.cards = res.data;
      var i = Math.floor((Math.random() * $scope.cards.length));
      $scope.card = $scope.cards[i];
      $scope.getAnswer = (index) => {
        $scope.card.hidden = true;
      };

      $scope.getQuestion = (index) => {
        $scope.card.hidden = false;
      };

    });
    $scope.changeCard = () => {
      Cards.getAll()
        .then(function(res) {
          $scope.cards = res.data;
          var i = Math.floor((Math.random() * $scope.cards.length));
          $scope.card = $scope.cards[i];
          $scope.getAnswer = (index) => {
            $scope.card.hidden = true;
          };

          $scope.getQuestion = (index) => {
            $scope.card.hidden = false;
          };

        });

    };


});

app.controller('addController', function($scope, Cards) {
  $scope.createCard = () => {
    Cards.create($scope.newCard);
    $scope.addForm.$setPristine();
    $scope.newCard = {};
  }
});

app.controller('listController', function($scope, Cards) {
  Cards.getAll()
    .then(function(res){
      $scope.cards = res.data;
    });


    $scope.getAnswer = (index) => {
      $scope.cards[index].hidden = true;
    };

    $scope.getQuestion = (index) => {
      $scope.cards[index].hidden = false;
    };

    var editingIndex;

    $scope.editCard = (card) => {
      editingIndex = $scope.cards.indexOf(card);
      $scope.cardToEdit = angular.copy(card);
    };

    $scope.cancelEdit = () => {
      $scope.cardToEdit = null;
    };
    $scope.saveEdit = () => {
      Cards.update($scope.cardToEdit)
        .then(() => {
          $scope.cards[editingIndex] = $scope.cardToEdit;
          $scope.cardToEdit = null;
        })
        .catch(err => {
          console.error(err);
        });
    };


    $scope.removeCard = (card) => {
       Cards.remove(card)
        .then(() => {
          var r = confirm("Are you sure you want to delete this card?");
          if(r){
            var index = $scope.cards.indexOf(card);
            $scope.cards.splice(index, 1);
          }
       })
       .catch(err => {
         console.error(err);
       });
     };


});
