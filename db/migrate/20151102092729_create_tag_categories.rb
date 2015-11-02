class CreateTagCategories < ActiveRecord::Migration
  def change
    create_table :tag_categories do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
