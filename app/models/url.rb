class Url < ApplicationRecord
  before_validation :hash
  validates :original, presence: true, uniqueness: true
  validates_format_of :original, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :shortened, presence: true, uniqueness: true

  private

  def hash
    hash = SecureRandom.hex(4)
    hash_uniqueness(hash)
  end

  def hash_uniqueness(generated_hash)
    @url = Url.find_by(shortened: "https://short.is/#{generated_hash}")

    if @url
      hash
    else
      generate_shortened(generated_hash)
    end
  end

  def generate_shortened(generated_hash)
    self.shortened = "https://short.is/#{generated_hash}"
  end

end
