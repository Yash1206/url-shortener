class Category < ApplicationRecord
  has_many :urls, dependent: :nullify
  validates :title, presence: true, uniqueness:{case_sensitive: false}
  before_save :downcase_title

  private
  
  def downcase_title
    self.title.downcase!
  end
end
