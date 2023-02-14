# Test suite for Weather Api
class ArticleTest < ActiveSupport::TestCase
  test "Api object returns good data for valid coords" do
    res = WeatherApi.get(latitude: 1.0, longitude: 1.0)
    parsed_res = JSON.parse(res, symbolize_names: true)

    assert_instance_of(Integer, parsed_res[:min])
    assert_instance_of(Integer, parsed_res[:max])
  end

  test "Api object raises error for bad latitude or longitude" do
    assert_raises(WeatherApi::CoordinatesLatitudeError) do
      res = WeatherApi.get(latitude: 420.0, longitude: 1.0)
    end

    assert_raises(WeatherApi::CoordinatesLongitudeError) do
      res = WeatherApi.get(latitude: 1.0, longitude: 420.0)
    end
  end
end
