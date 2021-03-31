function recherche(){
  const search = $('search-input');

    $.ajax({
      url: 'https://ghibliapi.herokuapp.com/',
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
             console.log(result);
         }
    })

}
