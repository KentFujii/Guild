$(document).on('page:change', function() {
  return $('.search_tags').on('click', function() {
    // 「検索」ボタンに反応する
    var search_form = $('.search_word');
    var params = new RegExp(search_form.val());
    console.log(params);
    $.ajax({
      type: "PATCH",
      url: "/tags/search_tags",
      data: {},
      success: function(data) {
        if (data.match(/<ul/)) {
          $('ul.tags-table').replaceWith(data);
        }
        else {
          console.log(data);
        }
      }
    });
  });
});
