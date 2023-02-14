# This object communicates with a public weather api to provide temperature data
class WeatherApi

  # Error for wrong latitude
  class CoordinatesLatitudeError < ::StandardError;end

  # Error for wrong longitude
  class CoordinatesLongitudeError < ::StandardError;end

  # This gets the temperature forecast for the next 8 days ans returns the minimum and maximum temperatures in it
  # returns a JSON string with date, min and max temperatures
  # { date: Date, min: XX, max: XX }
  def self.get(latitude:, longitude:)
    raise CoordinatesLatitudeError, "Invalid Latitude" if latitude > 90.0 || latitude < -90.0
    raise CoordinatesLongitudeError, "Invalid Longitude" if longitude > 180.0 || longitude < -180.0

    response = HTTParty.get("http://www.7timer.info/bin/api.pl?lat=#{latitude}&lon=#{longitude}&product=civil&output=json")

    # return any missed error
    return response if response.include? "ERR:"

    temps = JSON.parse(response.body)["dataseries"].map { |el| el["temp2m"] }
    { date: Date.today, min: temps.min, max: temps.max }.to_json
  end
end
