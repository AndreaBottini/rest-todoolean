// alert('funziona?')
// Todoolean
// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
// BONUS
// Aggiungiamo update del todo
// http://157.230.17.132:3003/todos

$(document).ready(function() {
  $('#button').click(function(){
    console.log('prova');
    //-3 richiamo funzione add elemnts che mi permette di stmapare e aggiugere elementi-
    addElements();

    $(document).on('click', '.delete-element', function(){
      var thisDeleteItem = $(this);
      var numberId = $(this).parent().attr('data-id');
      console.log(numberId);

      // deleteElements(id)
    })
  });
});


// ********** FUNZIONI **********
// -1 creo funzione per stampare elementi nella lista-
function printElements(){
  $.ajax({
    url: 'http://157.230.17.132:3003/todos',
    method: 'GET',
    success: function(data) {
      console.log(data);
      var source = $('#list-template').html();
      var template = Handlebars.compile(source);
      for (var i = 0; i < data.length; i++) {
        var thisElement = data[i];
        console.log(thisElement);
        var context = {
          text: thisElement.text,
          id: thisElement.id
        };
        var html = template(context);
        $('.list').append(html);
      }
    },
    error: function(request, state, errors) {
      alert('è avvenuto un errore');
    }
  });
};

// -2 creo funzione per aggiugere elementi nella lista -
function addElements() {
  var userText = $('#input_write').val();
  $.ajax({
    url: 'http://157.230.17.132:3003/todos',
    method: 'POST',
    data: {
      text: userText,
    },
    success: function(data) {
      $('.list').html('');
      //richiamo funzione stampa elementi per far comparire gli stampati precedenti e quello che ho aggiunto
      printElements();
    },
    error: function(request, state, errors) {
      alert('è avvenuto un errore');
    }
  });
};

// // -3 funzione per eliminare elementi
// function deleteElements(id) {
//   $.ajax({
//     url: 'http://157.230.17.132:3003/todos/' + id,
//     method: 'DELETE',
//     success: function(data) {
//       $('ul.list').html('');
//       //richiamo funzione stampa elementi per far comparire gli stampati precedenti e quello che ho aggiunto
//       printElements();
//     },
//     error: function(request, state, errors) {
//       alert('è avvenuto un errore');
//     }
//   });
// }
