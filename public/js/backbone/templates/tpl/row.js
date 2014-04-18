define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<td>' + escape((interp =  name ) == null ? '' : interp) + '</td><td>' + escape((interp =  surname ) == null ? '' : interp) + '</td><td>' + escape((interp =  age ) == null ? '' : interp) + '</td><td>' + escape((interp =  _id ) == null ? '' : interp) + '</td><td><button type="button" data-action="delete" class="btn btn-default">X</button></td>');
}
return buf.join("");
};
});