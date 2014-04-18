define(function(require) {
  'use strict';

  var Backbone = require('backbone')
  , homeTpl = require('js/apps/home/templates/tpl/home')
  ;

  return Backbone.View.extend({

    events: {
      'click [data-action="api"]': 'goToApi'
    },

    initialize:function (arg) {
      console.log('homeview');
      this.template = homeTpl;
      this.router = arg;
    },

    goToApi: function() {
      this.router.navigate("/api", true);
    },

    render:function () {
      $(this.el).html(this.template);
      return this;
    }

  });

});