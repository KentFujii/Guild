var toggle_home_address_fields, toggle_work_address_fields;

$(document).on('page:change', function() {
  if ($('div.confirming').length) {
    return;
  }
  toggle_home_address_fields();
  toggle_work_address_fields();
  $('input#form_inputs_home_address').on('click', function() {
    return toggle_home_address_fields();
  });
  return $('input#form_inputs_work_address').on('click', function() {
    return toggle_work_address_fields();
  });
});

toggle_home_address_fields = function() {
  var checked;
  checked = $('input#form_inputs_home_address').prop('checked');
  $('fieldset#home-address-fields input').prop('disabled', !checked);
  $('fieldset#home-address-fields select').prop('disabled', !checked);
  return $('fieldset#home-address-fields').toggle(checked);
};

toggle_work_address_fields = function() {
  var checked;
  checked = $('input#form_inputs_work_address').prop('checked');
  $('fieldset#work-address-fields input').prop('disabled', !checked);
  $('fieldset#work-address-fields select').prop('disabled', !checked);
  return $('fieldset#work-address-fields').toggle(checked);
};
