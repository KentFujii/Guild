class Staff::TagsController < Staff::Base
  def index
    @tags = Tag.order(:created_at)
  end

  def destroy
    Tag.find(params[:id]).destroy
    redirect_to :back
  end

  #PATCH(Ajax)
  def search_tags
    @tags = Tag.search(params[:q])
    # @tags = Tag.order(created_at: :desc)
    render 'tags_table', layout: false
  end
end
