class Staff::TagsController < Staff::Base
  def index
    @tags = Tag.order(:created_at)
    @tag = Tag.new
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.save
    render json: {
      value: @tag.value,
      id: @tag.id
    }
  end

  def destroy
    @tag = Tag.find(params[:id]).destroy
    render json: {
      tag: @tag
    }
  end

  #GET(Ajax)
  def search_tags
    @tags = Tag.where("value like '%" + params[:word] + "%'")
    render 'tags_table', layout: false
  end

  private

  def tag_params
    params.require(:tag).permit(:value)
  end
end
