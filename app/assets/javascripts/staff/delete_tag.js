$(document).on('page:change', function() {
  return $('.delete-tag').on('click', function() {
    $(this).closest('li').remove();
  });
});
