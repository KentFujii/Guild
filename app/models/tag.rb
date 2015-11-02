class Tag < ActiveRecord::Base
  belongs_to :tag_category
  has_many :message_tag_links, dependent: :destroy
  has_many :messages, through: :message_tag_links
end
