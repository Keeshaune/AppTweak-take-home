# This controller provides a read only api for the location resource
class LocationsController < ApplicationController
  # returns all stored locations
  def index
    locations = Location.all
    render json: locations
  end

  # returns a specific location based on the id given in the url
  # raises a 404 not found if the location doesn't exist
  def show
    location = Location.find(params[:id])
    render json: location
  rescue ActiveRecord::RecordNotFound => e
    render json: e, :status => :not_found
  end
end
