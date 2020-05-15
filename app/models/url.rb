class Url < ApplicationRecord
  validates :full_url, presence: true, uniqueness: true
  validates_format_of :full_url, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :short_url, presence: true, uniqueness: true

  def create_hash
    hash = SecureRandom.hex(4)
  end

  def check_hash_uniqueness(generated_hash)
    @url = Url.find_by(shortened: "https://short.is/#{generated_hash}")

    if @url
      create_hash
    else
      generate_hash(generated_hash)
    end
  end

  def generate_hash(generated_hash)
    self.short_url = "https://short.is/#{generated_hash}"
  end

end
