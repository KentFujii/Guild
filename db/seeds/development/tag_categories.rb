def create_tag_category(name)
  m = TagCategory.new(
    name: name
  )
  unless m.save!
    puts m.errors.full_messages
  end
end

['営業職', '技術職', '企画職'].each do |category|
  create_tag_category(category)
end
