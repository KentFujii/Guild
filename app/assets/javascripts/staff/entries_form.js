$(document).on('page:change', function() {
  return $('div.button-wrapper').on('click', 'button#update-entries-button', function() {
    var approved, canceled, not_approved, not_canceled;
    approved = [];
    not_approved = [];
    canceled = [];
    not_canceled = [];
    $('table.entries input.approved').each(function() {
      if ($(this).prop('checked')) {
        return approved.push($(this).data('entry-id'));
      } else {
        return not_approved.push($(this).data('entry-id'));
      }
    });
    $('#form_approved').val(approved.join(':'));
    $('#form_not_approved').val(not_approved.join(':'));
    $('table.entries input.canceled').each(function() {
      if ($(this).prop('checked')) {
        return canceled.push($(this).data('entry-id'));
      } else {
        return not_canceled.push($(this).data('entry-id'));
      }
    });
    $('#form_canceled').val(canceled.join(':'));
    $('#form_not_canceled').val(not_canceled.join(':'));
    return $('div.button-wrapper form').submit();
  });
});
