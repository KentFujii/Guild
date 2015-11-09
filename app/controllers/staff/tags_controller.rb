class Staff::TagsController < Staff::Base

  def index
    @tags = Tag.order(:created_at)
  end

  def remove_tag
    Tag.find(params[:id]).destroy
    redirect_to :back
  end
end
