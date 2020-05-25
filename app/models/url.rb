class Url < ApplicationRecord
  before_validation :generate_shortened
  validates :original, presence: true, uniqueness: true
  validates_format_of :original, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :shortened, presence: true, uniqueness: true
  belongs_to :category, optional: true

  private

  def generate_shortened
    loop do
      self.shortened = SecureRandom.hex(4)
      break unless Url.exists?( shortened: self.shortened )
    end
  end
end
