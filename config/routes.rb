Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "spa#home"

  get "/locations", to: "locations#index"
  get "/locations/:id", to: "locations#show"
  # Defines the root path route ("/")
  # root "articles#index"
end
