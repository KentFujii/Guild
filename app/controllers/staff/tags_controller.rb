class Staff::TagsController < Staff::Base
  def index
    @tags = Tag.order(:created_at)
  end

  def create
    
  end

  def destroy
    Tag.find(params[:id]).destroy
    render nothing: true
  end

  #GET(Ajax)
  def search_tags
    @tags = Tag.where("value like '%" + params[:word] + "%'")
    render 'tags_table', layout: false
  end
end
