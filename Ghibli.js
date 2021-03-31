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

    var divGif = $(".bloc-gif-attente");
    divGif.setAttribute("display","true");

}
