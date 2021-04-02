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
       }
  })



}

function loadGif(){
  $("#bloc-gif-attente").css({"display": "block"});
}
function unLoadGif(){
  $("#bloc-gif-attente").css({"display": "none"});
}
