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
            if(resultat.length != 0){
              resultat.forEach((res, i) => {
                  element.append(
                    '<div class="movie">' +
                    '<h4>'+'<b>' + 'Titre : ' + '</b>' + resultat[i].title + '</h4>' +
                    '<p>' +'<b>' +'Titre Original : ' + '</b>' + resultat[i].original_title +'<p>' +
                    '<p>' +'<b>' +'Director : ' + '</b>' + resultat[i].director + '<p>' +
                    '<p>' +'<b>' +'Producer : ' + '</b>' + resultat[i].producer + '<p>' +
                    '<p>' +'<b>' +'Release date : ' + '</b>' + resultat[i].release_date + '<p>' +
                    '<p>' +'<b>' +'Running Time : ' + '</b>' + resultat[i].running_time + '<p>' +
                    '<p>' +'<b>' +'Rating :  ' + '</b>' + resultat[i].rt_score + '<p>' +
                    '</div>' +'<hr>'
                  );
              });
            }
            else{
            element.append('<p>'+ '( ∅ Aucun résultat trouvé )' + '</p>');
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

//ne marche pas
function onload(){
  var search = $('#search-input').val();

  if(search != null){
    var btn = $("#btn-favoris");
    btn.enabled = true;
    btn.attr("onclick","bookmark");
    console.log("ui");
  }
  else if( search==""){

  }
}

function bookmark(){
  var search = $('#search-input').val();
  var monStockage = localStorage;
  monStockage.setItem(search, search);
}

function removeBookmark(text){
  var monStockage = localStorage;
  monStockage.removeItem('text');
}
