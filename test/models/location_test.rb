require "test_helper"

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should save a location with valid params" do
    location = Location.new(city: "Atlantis", latitude: 1.0, longitude: 1.0)
    assert location.save
  end

  test "should not save a location with no city" do
    unamed_location = Location.new(city: nil, latitude: 1.0, longitude: 1.0)
    assert_not unamed_location.save
  end

  test "should not save city that already exists" do
    Location.create(city: "Alice", latitude: 1.0, longitude: 1.0)
    dup_location = Location.new(city: "Alice", latitude: 1.0, longitude: 1.0)
    assert_not dup_location.save
  end

  test "should not save a location with bad latitude" do
    nil_lat_location = Location.new(city: "City", latitude: nil, longitude: 1.0)
    assert_not nil_lat_location.save

    hight_lat_location = Location.new(city: "City", latitude: 420.0, longitude: 1.0)
    assert_not hight_lat_location.save

    low_lat_location = Location.new(city: "City", latitude: -420.0, longitude: 1.0)
    assert_not low_lat_location.save
  end

  test "should not save a location with bad longitude" do
    nil_long_location = Location.new(city: "City", latitude: 1.0, longitude: nil)
    assert_not nil_long_location.save

    hight_long_location = Location.new(city: "City", latitude: 1.0, longitude: 420.0)
    assert_not hight_long_location.save

    low_long_location = Location.new(city: "City", latitude: 1.0, longitude: -420.0)
    assert_not low_long_location.save
  end
end
