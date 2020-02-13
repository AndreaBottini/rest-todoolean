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
    success: function(data){
      console.log(data);
    },
    error: function(request, state, errors) {
      alert('è avvenuto un errore')
    }

  });
});
