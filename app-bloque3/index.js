$(function() {
  var ps = $('p');
  var p = document.createElement('p');
  document.body.appendChild(p);
  ps = ps.add(p);
  // crear elementos object
  $('<p>', {html: 'Me Acaban de Crear'});
})