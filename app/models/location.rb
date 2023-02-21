# This is the model for a location to represent a city based on a name and coordinates (latitude, longitude)
class Location < ApplicationRecord
  validates :city, :latitude, :longitude, presence: true, uniqueness: true
  validates :latitude, numericality: { in: (-90.0..90.0) }
  validates :longitude, numericality: { in: (-180.0..180.0) }
end
