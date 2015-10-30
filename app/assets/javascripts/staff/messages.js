var update_number_of_unprocessed_messages;

$(document).on('page:change', function() {
  if ($('#number-of-unprocessed-messages').length) {
    return setInterval(update_number_of_unprocessed_messages, 1000 * 60);
  }
});

update_number_of_unprocessed_messages = function() {
  return $.get(window.paths.number_of_unprocessed_messages, function(data) {
    return $('#number-of-unprocessed-messages').text("(" + data + ")");
  });
};
