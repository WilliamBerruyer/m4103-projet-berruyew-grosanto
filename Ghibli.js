function recherche(){

    $.ajax({
      url: 'https://ghibliapi.herokuapp.com/films',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
             console.log(result);
         }
    })

    var divGif = $(".bloc-gif-attente");
    divGif.setAttribute("display","true");

}
