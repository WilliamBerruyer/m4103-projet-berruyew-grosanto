function recherche(){

  var search = $('#search-input').val();


    $.ajax({
      url: 'https://ghibliapi.herokuapp.com/films',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
             console.log(result);
               console.log(search);
         }
    })

    $("#bloc-gif-attente").css({"display": "block"});

}
