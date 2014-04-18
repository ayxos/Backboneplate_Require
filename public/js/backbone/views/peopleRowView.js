define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  return Backbone.View.extend({

    tagName:"tr",

    events: {
      'click #dele': 'delete'
    },

    initialize:function () {
      console.log('peopleRowView');
      // this.template = _.template(tpl.get('people-list-item'));
      this.template = _.template("<td> <%= name %> </td> <td> <%= surname %> </td> <td> <%= age %> </td> <td> <%= _id %> <td> <input id='dele' type='submit' value='X'> </td>");
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },

    delete: function() {
      this.model.destroy({
        success: function() {
          console.log('People deleted successfully');
        }
      });
      return false;
    },

    render:function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

  });

});