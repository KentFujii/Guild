$(document).on('page:change', function() {
  return $(".search_word").on('keyup', function() {
  	$.ajax({
  		url: "tags/search_tags",
  		type: "GET",
  		data: { word: $(this).val() },
      success: function(data) {
        if (data.match(/<div/)) {
          $("div.tags-table").replaceWith(data);
        }
        else {
          console.log(data);
        }
      }
    });
	});
});
