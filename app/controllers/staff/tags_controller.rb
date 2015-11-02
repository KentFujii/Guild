class Staff::TagsController < Staff::Base

  def index
    @tags = Tag.order(:created_at)
  end
end
