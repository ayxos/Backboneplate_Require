requirejs.config({
  waitSeconds: 0,

  baseUrl: '/',

  paths: {
    jade                         : '../vendors/jade/runtime',
    jquery                       : '../vendors/jquery/jquery',
    underscore                   : '../vendors/underscore/underscore',
    backbone                     : '../vendors/backbone/backbone'

  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['backbone', 'js/backbone/router'], function(Backbone, AppRouter) {
  //ES IMPRESCINDIBLE BACKBONE HISTORY START
  Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
      this.beforeClose();
    }
    this.remove();
    this.unbind();
  };
  console.log('main.js');
  this.app = new AppRouter({});
  //ES IMPRESCINDIBLE BACKBONE HISTORY START
  Backbone.history.start();
});
