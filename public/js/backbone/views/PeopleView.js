define(function(require) {
  'use strict';
  var
  peopleTpl = require('js/backbone/templates/tpl/people')
  , PeopleRowView = require('js/backbone/views/PeopleRowView')
  , PeopleModel = require('js/backbone/entities/peopleModel')
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

    // openModal: function(){
    //   var modal = new ModalView();
    //   var ex = new ExModalView(this);
    //   $('#modal').html(modal.show(ex).el);

    // },

    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

});