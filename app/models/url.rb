class Url < ActiveRecord::Base 
  before_validation :create_short_url
  validates :full, presence: true, uniqueness: true
  validates_format_of :full, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :shortened, presence: true, uniqueness: true

  def create_short_url
    hash = SecureRandom.hex(4)
    check_hash_uniqueness(hash)
  end

  def check_hash_uniqueness(generated_hash)
    @url = Url.find_by(shortened: "https://short.is/#{generated_hash}")
    if @url
      create_short_url
    else
      self.shortened = "https://short.is/#{generated_hash}"
    end
  end
end