class Url < ActiveRecord::Base 
  validates :full, presence: true, uniqueness: true
  validates_format_of :full, :with => /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
  validates :shortened, presence: true, uniqueness: true
end