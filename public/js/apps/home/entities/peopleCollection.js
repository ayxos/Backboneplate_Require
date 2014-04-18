define(function(require) {
  'use strict';

  var PeopleModel = require('js/apps/home/entities/peopleModel');

  return Backbone.Collection.extend({
    idAttribute: '_id',
    model: PeopleModel,
    url: "api/entries",

    initialize: function(){
      console.log("peopleCollection");
    }

  });

});