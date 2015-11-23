$(document).on('click','.delete-tag', function() {
  var tag_id = $(this).attr('id');
  $.ajax({
    url: "tags/" + tag_id,
    type: "DELETE",
    success: function(data) {
      $('span#' + tag_id).parents('span.delete-span').remove();
    }
  });
});
