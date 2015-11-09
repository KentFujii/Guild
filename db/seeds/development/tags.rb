def create_tags(value, category=nil)
  m = Tag.new(
    value:        value,
    tag_category_id: category
  )
  unless m.save!
    puts m.errors.full_messages
  end
end

tag_values = []
("a" .. "z").each do |c|
  tag_values << c * 3
end

tag_values.each do |value|
  create_tags(value, TagCategory.all.sample.id)
end
