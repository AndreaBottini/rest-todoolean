// alert('funziona?')
// Todoolean
// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
// BONUS
// Aggiungiamo update del todo
// http://157.230.17.132:3003/todos

$(document).ready(function() {



  $.ajax({
    url: 'http://157.230.17.132:3003/todos',
    method: 'GET',
    success: function(data) {
      console.log(data);
      var source = $('#list-template').html()
      var template = Handlebars.compile(source);
      for (var i = 0; i < data.length; i++) {
        var thisElement = data[i];
        console.log(thisElement);
        var context = {
          text: thisElement.text,
        };
        var html = template(context);
        $('.list').append(html)
      }
    },
    error: function(request, state, errors) {
      alert('è avvenuto un errore');
    }
  });
});
