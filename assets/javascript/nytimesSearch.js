$(document).ready(function(){
	$("#search-article").on("click", function(){
		event.preventDefault();
		var search = $("#search-Term-input").val();
		var number = $("#records-num").val();
		var startYear = $("#start-year-input").val();
		var endYear = $("#end-year-input").val();

		console.log({search, number, startYear, endYear});
	});

  //var apiKey = "82d4d94e8b09420888768ec26d85461e";
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  queryURL += '?' + $.param({
    'api-key': "82d4d94e8b09420888768ec26d85461e",
    'search': "h",
    'startYear': "",
    'endYear': ""
  });


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    //Show the response the ajax retrieves
    console.log(response);

    //Declare a variable that will store the response
    var results = response.data;


  }).fail(function(err) {
    throw err;
  });

});
