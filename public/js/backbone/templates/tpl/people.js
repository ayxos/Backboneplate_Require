define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<button type="button" data-action="openModal" class="btn btn-default">Modal</button>Backbone BBDD form<div class="persona"><input id="name" placeholder="Name"/><input id="surname" placeholder="Surname"/><input id="age" placeholder="age"/><button type="button" data-action="new" class="btn btn-default">Back</button></div>rutas BB<table id="bbdd"></table><button type="button" data-action="home" class="btn btn-default">Back</button>');
}
return buf.join("");
};
});