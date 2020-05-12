class Url < ActiveRecord::Base 
  before_validation :create_short_url
  validates :full, presence: true, uniqueness: true
  validates_format_of :full, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :shortened, presence: true, uniqueness: true

  def create_short_url
    hash = SecureRandom.hex(4)
    self.shortened = "https://short.is/#{hash}"
  end
end