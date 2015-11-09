class Staff::TagsController < Staff::Base

  def index
    @tags = Tag.order(:created_at)
  end

  def remove_tag
    Tag.find(params[:id]).destroy
    redirect_to :back
  end

  #PATCH(Ajax)
  def search_tags
    puts 'aaa' * 100
    @tags = Tag.order(created_at: :desc)
    render 'tags_table', layout: false
  end
end
