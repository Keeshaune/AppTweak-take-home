# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

european_capitals = [
  { city: 'Tirana', latitude: 41.3166666666667, longitude: 19.816667 },
  { city: 'Andorra la Vella', latitude: 42.5, longitude: 1.516667 },
  { city: 'Yerevan', latitude: 40.166666666666664, longitude: 44.5 },
  { city: 'Vienna', latitude: 48.2, longitude: 16.366667 },
  { city: 'Baku', latitude: 40.38333333333333, longitude: 49.866667 },
  { city: 'Minsk', latitude: 53.9, longitude: 27.566667 },
  { city: 'Brussels', latitude: 50.833333333333336, longitude: 4.333333 },
  { city: 'Sarajevo', latitude: 43.86666666666667, longitude: 18.416667 },
  { city: 'Sofia', latitude: 42.68333333333333, longitude: 23.316667 },
  { city: 'Zagreb', latitude: 45.8, longitude: 16 },
  { city: 'Nicosia', latitude: 35.166666666666664, longitude: 33.366667 },
  { city: 'Prague', latitude: 50.083333333333336, longitude: 14.466667 },
  { city: 'Copenhagen', latitude: 55.666666666666664, longitude: 12.583333 },
  { city: 'Tallinn', latitude: 59.43333333333333, longitude: 24.716667 },
  { city: 'Helsinki', latitude: 60.166666666666664, longitude: 24.933333 },
  { city: 'Paris', latitude: 48.86666666666667, longitude: 2.333333 },
  { city: 'Tbilisi', latitude: 41.68333333333333, longitude: 44.833333 },
  { city: 'Berlin', latitude: 52.516666666666666, longitude: 13.4 },
  { city: 'Athens', latitude: 37.983333333333334, longitude: 23.733333 },
  { city: 'Budapest', latitude: 47.5, longitude: 19.083333 },
  { city: 'Reykjavik', latitude: 64.15, longitude: -21.95 },
  { city: 'Dublin', latitude: 53.31666666666667, longitude: -6.233333 },
  { city: 'Rome', latitude: 41.9, longitude: 12.483333 },
  { city: 'Pristina', latitude: 42.666666666666664, longitude: 21.166667 },
  { city: 'Riga', latitude: 56.95, longitude: 24.1 },
  { city: 'Vaduz', latitude: 47.13333333333333, longitude: 9.516667 },
  { city: 'Vilnius', latitude: 54.68333333333333, longitude: 25.316667 },
  { city: 'Luxembourg', latitude: 49.6, longitude: 6.116667 },
  { city: 'Skopje', latitude: 42, longitude: 21.433333 },
  { city: 'Valletta', latitude: 35.88333333333333, longitude: 14.5 },
  { city: 'Chisinau', latitude: 47, longitude: 28.85 },
  { city: 'Monaco', latitude: 43.733333333333334, longitude: 7.416667 },
  { city: 'Podgorica', latitude: 42.43333333333333, longitude: 19.266667 },
  { city: 'Amsterdam', latitude: 52.35, longitude: 4.916667 },
  { city: 'Oslo', latitude: 59.916666666666664, longitude: 10.75 },
  { city: 'Warsaw', latitude: 52.25, longitude: 21 },
  { city: 'Lisbon', latitude: 38.71666666666667, longitude: -9.133333 },
  { city: 'Bucharest', latitude: 44.43333333333333, longitude: 26.1 },
  { city: 'Moscow', latitude: 55.75, longitude: 37.6 },
  { city: 'Belgrade', latitude: 44.833333333333336, longitude: 20.5 },
  { city: 'Bratislava', latitude: 48.15, longitude: 17.116667 },
  { city: 'Ljubljana', latitude: 46.05, longitude: 14.516667 },
  { city: 'Madrid', latitude: 40.4, longitude: -3.683333 },
  { city: 'Stockholm', latitude: 59.333333333333336, longitude: 18.05 },
  { city: 'Bern', latitude: 46.916666666666664, longitude: 7.466667 },
  { city: 'Ankara', latitude: 39.93333333333333, longitude: 32.866667 },
  { city: 'Kyiv', latitude: 50.43333333333333, longitude: 30.516667 },
  { city: 'London', latitude: 51.5, longitude: -0.083333 }
]

european_capitals.each do |capital|
  Location.create(
    city: capital[:city],
    latitude: capital[:latitude],
    longitude: capital[:longitude]
  )
end