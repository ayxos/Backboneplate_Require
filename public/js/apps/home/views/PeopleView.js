define(function(require) {
  'use strict';
  var
  peopleTpl = require('js/apps/home/templates/tpl/people')
  , PeopleRowView = require('js/apps/home/views/PeopleRowView')
  , PeopleModel = require('js/apps/home/entities/peopleModel')
  , HomeModalView = require('js/apps/home/views/modal/homeModalView')
  ;

  return Backbone.View.extend({

    events: {
      'click [data-action="home"]': 'home',
      'click [data-action="new"]': 'createNew',
      'click [data-action="openModal"]':'openModal'
    },

    initialize: function(options) {
      console.log('peopleView');
      this.template = peopleTpl;
      this.router = options.router;
    },

    home: function(){
      Backbone.history.navigate('/', true);
    },

    createNew: function(event) {
      this.model = new PeopleModel({
        name: this.$el.find('#name').val(),
        surname: this.$el.find('#surname').val(),
        age: this.$el.find('#age').val()
      });
      var id;
      this.collection.create(this.model, {
        success: function(response) {
          id = response.get('_id');
        }
      });

      this.model.set({
        '_id': id
      });

      this.$el.find('#name').val('');
      this.$el.find('#surname').val('');
      this.$el.find('#age').val('');

      $('#bbdd').append(new PeopleRowView({ model: this.model }).render().el);

      return this;
    },

    openModal: function(){
      new HomeModalView();
    },

    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

});