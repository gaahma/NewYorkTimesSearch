$(document).ready(function(){
	$("#search-article").on("click", function(){
		var search = $(this).val();
	});


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    //Show the response the ajax retrieves
    console.log(response);

    //Declare a variable that will store the response
    var results = response.data;




  })

});
