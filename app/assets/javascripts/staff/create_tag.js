$(document).on('page:change', function() {
  return $('.create-tag').on('click', function() {
    $.ajax({
      url: "tags",
      type: "POST",
      data: { tag:
        {
          value: $('.create-tag-value').val()
        }
      },
      success: function(data) {
        spanTag = $('<span>').appendTo('.tags-table');
        spanTag.attr({
          class: 'col-md-2 col-sm-3 col-xs-6 delete-span'
        });
        divTag  = $('<div>').appendTo(spanTag);
        divTag.text(data.value)
        divTag.attr({
          class: 'panel panel-default tags'
        });
        deleteTag = $('<span>').appendTo(divTag);
        deleteTag.attr({
          class: 'glyphicon glyphicon-remove delete-tag',
          style: 'color: black; float: right',
          id: data.id
        })
      }
    });
  });
});
