define(function(require) {
  'use strict';

  var Backbone = require('backbone')
  , PeopleCollection = require('js/apps/home/entities/peopleCollection')
  , PeopleView = require('js/apps/home/views/PeopleView')
  , PeopleListView = require('js/apps/home/views/peopleListView')
  , HomeView = require('js/apps/home/views/homeView');

  return Backbone.Router.extend({

    routes: {
      '' : 'home',
      'api' : 'listAll'
    },

    home: function(){
      console.log('router.js: loading backbone data' );
      // instancio home view
      this.homeView = new HomeView(this);
      $('#backbone').html( this.homeView.render().el );
    },

    listAll: function(callback) {
      // instancio coleccion
      this.peopleCol = new PeopleCollection();
      // instancio composite view
      this.peopleView = new PeopleView({ collection: this.peopleCol, router: this });
      $('#backbone').html( this.peopleView.render().el );

      var self = this;

      this.peopleCol.fetch({
        success: function() {
          // init List view
          var peopleListView = new PeopleListView({ collection: self.peopleCol });
          $('#bbdd').html( peopleListView.render().el );
        }
      });

    }

  });

});