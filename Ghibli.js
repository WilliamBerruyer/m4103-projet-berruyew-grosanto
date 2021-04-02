function recherche(){
  var search = $('#search-input').val();
  loadGif();
  $.ajax({
    url: 'https://ghibliapi.herokuapp.com/films',
    contentType: "application/json",
    dataType: 'json',
    success: function(result){
            console.log(result);
            console.log(search);
            unLoadGif();
            var element = $('#bloc-resultats');
            $(element).after('<p>'+ result[1].title + '</p>');



       }
  })



}

function loadGif(){
  $("#bloc-gif-attente").css({"display": "block"});
}
function unLoadGif(){
  $("#bloc-gif-attente").css({"display": "none"});
}
