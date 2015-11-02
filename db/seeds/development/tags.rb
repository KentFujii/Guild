def create_tags(value, category=nil)
  m = Tag.new(
    value:        value,
    tag_category_id: category
  )
  unless m.save!
    puts m.errors.full_messages
  end
end

tag_values = %w(
  aaa bbb ccc ddd eee fff ggg hhh iii jjj kkk
)

tag_values.each do |value|
  create_tags(value, TagCategory.all.sample.id)
end
