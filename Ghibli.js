function recherche(){
  
    $.ajax({
      url: 'https://ghibliapi.herokuapp.com/films',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
             console.log(result);
         }
    })

}
