class LocationsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get show" do
    location = Location.create(city: "A location", latitude: 1.0, longitude: 1.0)
    get :show, params: { :id => location.id }
    assert_response :success
  end

  test "should error for non existent location show" do
    get :show, params: { :id => Location.last.id + 1 }
    assert_response :not_found
  end
end