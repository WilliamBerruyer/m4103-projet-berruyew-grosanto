function recherche(){
  var search = $('#search-input').val();
  loadGif();
  $.ajax({
    url: 'https://ghibliapi.herokuapp.com/films',
    contentType: "application/json",
    dataType: 'json',
    success: function(result){

            console.log(search);
            unLoadGif();
            var resultat = getGoodTitles(search, result);
            console.log(resultat);
            var element = $('#bloc-resultats');
            element.html("");
            if(resultat != null){
              resultat.forEach((res, i) => {
                  element.append(
                    '<div class="movie">' +
                    '<h4>'+ resultat[i].title + '</h4>' +
                    '<p>' + resultat[i].original_title +'<p>' +
                    '<p>' + resultat[i].director + '<p>' +
                    '<p>' + resultat[i].producer + '<p>' +
                    '<p>' + resultat[i].release_date + '<p>' +
                    '<p>' + resultat[i].running_time + '<p>' +
                    '<p>' + resultat[i].rt_score + '<p>'



                  );

              });




            }
            else{
            element.after('<p>'+ '( ∅ Aucun résultat trouvé )' + '</p>');
            }




       }
  })



}

function loadGif(){
  $("#bloc-gif-attente").css({"display": "block"});
}
function unLoadGif(){
  $("#bloc-gif-attente").css({"display": "none"});
}

function getGoodTitles(text,result){
  var newArray = Array();
  var nbGood = 0;
  const txtArray = text.split(' ');
  const newTxtArray = Array();
  txtArray.forEach(mot => {
    if (mot.length>3){
      newTxtArray.push(mot);
    }
  });
  result.forEach(film => {
    const titleArray = film.title.split(' ');
    newTxtArray.forEach(mot => {
      titleArray.forEach(motTitle => {
        if (motTitle.toLowerCase() == mot.toLowerCase()){
          nbGood=nbGood+1
        }
      });

    });
    if (nbGood==newTxtArray.length){
      newArray.push(film);
    }
    nbGood=0;
  });

  return newArray;
}
