$(document).on('page:change', function() {
  return $('.search_tags').on('click', function() {
    // 「検索」ボタンに反応する
    var search_form = $('.search_word');
    var params = new RegExp(search_form.val());
    console.log(params);
    do_search(params);

    function do_search(params) {
      console.log(params)
      
      // var list_field_set_id = $('#list_field_set_id').val(),
      //   current_url = location.pathname;
      // if (current_url === '/registrants') {
      //   var url = "registrants/registrants_table";
      // }
      // else {
      //   var url = "registrants_table";
      // }
      // if (list_field_set_id) {
      //   url += "?list_field_set_id=" + list_field_set_id;
      // }
      // url += " #registrants_table";
      // $('#registrants_table_area').css({
      //   height: $('#registrants_table_area').innerHeight()
      // });
      // $('#registrants_table').remove();
      // $('#registrants_table_area').load(url, params, function() {
      //   $('#registrants_table_area').css({ height: '' });
      //   refresh_paginate();
      //   refresh_delete_buttons();
      // });
    }
    //
    // function refresh_paginate() {
    //   $('#registrants').find('div.paginate a').each(function() {
    //     var link = $(this);
    //     link.attr('href', '#');
    //     link.click(function(e) { e.preventDefault(); });
    //     link.on('click', refresh_registrants_table);
    //   });
    // }
    //
    // function refresh_delete_buttons() {
    //   var all_check;
    //   all_check = $("#registrants_all_check");
    //   if (all_check.prop('checked')) {
    //     all_check.attr('data-now-check', 'true');
    //   }
    //   else {
    //     all_check.attr('data-now-check', 'false');
    //   }
    //   toggleTrash();
    // }
  });
});
