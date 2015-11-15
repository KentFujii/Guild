$(document).on('page:change', function() {
  return $(".search_word").on('keyup', function() {
    console.log($(this).val())
  	$.ajax({
  		url: "tags/search_tags",
  		type: "GET",
  		data: { word: $(this).val() }
    });
	});
});
