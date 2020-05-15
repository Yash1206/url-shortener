class Url < ApplicationRecord
  validates :full_url, presence: true, uniqueness: true
  validates_format_of :full, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :short_url, presence: true, uniqueness: true

  def create_hash
    hash = SecureRandom.hex(4)
  end

end
