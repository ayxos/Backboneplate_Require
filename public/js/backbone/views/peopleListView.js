define(function(require) {
  'use strict';

  var PeopleRowView = require('js/backbone/views/peopleRowView');

  return Backbone.View.extend({

    tagName:'tbody',

    initialize:function () {
      console.log('peopleListView');
      this.collection.bind("reset", this.render, this);
      this.collection.bind('add', this.add, this);
    },

    render:function (eventName) {
      _.each(this.collection.models, function (people) {
        var peopleRowView = new PeopleRowView({ model: people });
        $(this.el).append(peopleRowView.render().el);
      }, this);
      return this;
    }
  });

});