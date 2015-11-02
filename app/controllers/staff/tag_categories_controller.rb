class Staff::TagCategoriesController < Staff::Base

  def index
    @tag_categories = TagCategory.order(:name)
  end

  def edit
    @tag_categories = TagCategory.find(params[:id])
    
  end
end
