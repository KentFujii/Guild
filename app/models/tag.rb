class Tag < ActiveRecord::Base
  belongs_to :tag_category
  has_many :message_tag_links, dependent: :destroy
  has_many :messages, through: :message_tag_links

  class << self
    def search(query)
      rel = order(:value)
      if query.present?
        rel = rel.where("value LIKE ?", "%#{query}%")
      end
      rel
    end
  end
end
