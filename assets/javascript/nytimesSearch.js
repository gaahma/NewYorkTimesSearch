$(document).ready(function(){
	$("#search-article").on("click", function(){
		event.preventDefault();
		var search = $("#search-Term-input").val();
		var number = $("#records-num").val();
		var startYear = $("#start-year-input").val();
		var endYear = $("#end-year-input").val();

		console.log({search, number, startYear, endYear});

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'q': search,
      "begin_date": startYear,
      'end_date': endYear,
      'api-key': "82d4d94e8b09420888768ec26d85461e",

    });

    //console.log(queryURL);


    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response){
      //Show the response the ajax retrieves
      console.log(response);
      var articles = response.response.docs;
      for (var i = 0; i < number; i++){
        displayArticle(articles[i]);
      }

      //Declare a variable that will store the response
      var results = response.data;


    }).fail(function(err) {
      throw err;
    });
	});

  //var apiKey = "82d4d94e8b09420888768ec26d85461e";


});


function displayArticle(doc){
  var articleDiv = $("<div>").addClass("article");
  var headline = $("<p>").text(doc.headline.main);
  var snippet = $("<p>").text(doc.snippet);
  articleDiv.append(headline, snippet);
  $("#articles-found").append(articleDiv);

}
