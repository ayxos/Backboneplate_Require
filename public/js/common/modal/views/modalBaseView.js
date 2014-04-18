define(function(require) {
  'use strict';

  require('vendors/bootstrap/bootstrap');
  var modalBaseTpl = require('js/common/modal/templates/tpl/modalTpl');

  return Backbone.View.extend({

    id: 'base-modal',
    className: 'modal fade',

    events: {
      'hidden': 'teardown',
      'click button#close': 'close',
      'click [data-action="closeModal"]': 'close'
    },

    initialize: function(modalContentTpl) {
      console.log('modalBaseView');
      this.template = modalBaseTpl;
      this.modalContentTpl = modalContentTpl;
      this.render();
    },

    close: function(){
      console.log('destroying modal');
      this.undelegateEvents();
      this.$el.removeData().unbind();
      //Remove view from DOM
      this.remove();
      Backbone.View.prototype.remove.call(this);
      $('.modal-backdrop').remove();
    },

    show: function() {
      this.$el.modal('show');
    },

    teardown: function() {
      this.$el.data('modal', null);
      this.remove();
    },

    render: function() {
      this.renderView();
      return this;
    },

    renderView: function(template) {
      this.$el.html(this.template);
      // this.$el.modal({show:false}); // dont show modal on instantiation
      this.$el.find('#modal_content').html(this.modalContentTpl);
      this.show();
    }


  });

});