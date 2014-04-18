define(function(require) {
  'use strict';

  var modalTpl = require('js/apps/home/templates/tpl/modal/modal')
  , ModalBaseView = require('js/common/modal/views/modalBaseView')
  ;

  return Backbone.View.extend({

    initialize:function () {
      console.log('homeModalView');
      this.template = modalTpl;
      this.render();
    },

    render:function () {
      this.modal = new ModalBaseView(this.template);
    }

  });

});