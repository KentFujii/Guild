module ApplicationHelper
  include HtmlBuilder

  def document_title
    if @title.present?
      "#{@title} - Guild"
    else
      'Guild'
    end
  end
end
