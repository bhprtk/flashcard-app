'use strict';

var app = angular.module('flashCardApp');

app.service('Cards', function($http) {

  this.create = card => $http.post('/api', card);

  this.getAll = () => $http.get('/api');

  this.update = card => $http.put(`/api/${card._id}`, card);

  this.remove = card => $http.delete(`/api/${card._id}`);


});
