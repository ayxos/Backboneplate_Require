define(function(require) {
  'use strict';

  var PeopleModel = require('js/backbone/entities/peopleModel');

  return Backbone.Collection.extend({
    idAttribute: '_id',
    model: PeopleModel,
    url: "api/entries",

    initialize: function(){
      console.log("peopleCollection");
    }

  });

});