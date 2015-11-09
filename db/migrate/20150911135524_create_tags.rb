class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.references :tag_category
      t.string :value, null: false

      t.timestamps null: false
    end
    add_index :tags, :value, unique: true
  end
end
