define(function(require) {
  'use strict';

  var Backbone = require('backbone')
  , rowTpl = require('js/backbone/templates/tpl/row')
  ;

  return Backbone.View.extend({

    tagName:"tr",

    events: {
      'click [data-action="delete"]': 'delete'
    },

    initialize:function () {
      console.log('peopleRowView');
      this.template = rowTpl;
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