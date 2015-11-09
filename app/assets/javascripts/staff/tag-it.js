$(document).on('page:change', function() {
  return $("#tag-it").tagit({
    afterTagAdded: function(e, ui) {
      var message_id, path;
      if (!ui.duringInitialization) {
        message_id = $("#tag-it").data('message-id');
        path = "/messages/" + message_id + "/tag";
        return $.post(path, {
          label: ui.tagLabel
        });
      }
    },
    afterTagRemoved: function(e, ui) {
      var message_id, path;
      if (!ui.duringInitialization) {
        message_id = $("#tag-it").data('message-id');
        path = "/messages/" + message_id + "/tag";
        return $.ajax({
          type: 'DELETE',
          url: path,
          data: {
            label: ui.tagLabel
          }
        });
      }
    }
  });
});
