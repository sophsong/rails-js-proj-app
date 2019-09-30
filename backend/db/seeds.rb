# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all
Player.destroy_all

#   t.string :name
  # t.string :location
  # t.integer :ranking
Team.create!(name: "Arizona Cardinals", location: "Arizona", ranking: 29)
Team.create!(name: "Atlanta Falcons", location: "Atlanta", ranking: 15)
Team.create!(name: "Baltimore Ravens", location: "Baltimore", ranking: 19)
Team.create!(name: "Buffalo Bills", location: "Buffalo", ranking: 21)
Team.create!(name: "Carolina Panthers", location: "Charlotte", ranking: 14)
Team.create!(name: "Chicago Bears", location: "Chicago", ranking: 8)
Team.create!(name: "Cincinnati Bengals", location: "Cincinnati", ranking: 32)
Team.create!(name: "Cleveland Browns", location: "Cleveland", ranking: 10)
Team.create!(name: "Dallas Cowboys", location: "Dallas", ranking: 11)
Team.create!(name: "Denver Broncos", location: "Denver", ranking: 24)
Team.create!(name: "Detroit Lions", location: "Detroit", ranking: 25)
Team.create!(name: "Green Bay Packers", location: "Green Bay", ranking: 9)
Team.create!(name: "Houston Texans", location: "Houston", ranking: 13)
Team.create!(name: "Indianapolis Colts", location: "Indianapolis", ranking: 3)
Team.create!(name: "Jacksonville Jaguars", location: "Jacksonville", ranking: 20)
Team.create!(name: "Kansas City Chiefs", location: "Kansas City", ranking: 7)
Team.create!(name: "Los Angeles Chargers", location: "Los Angeles", ranking: 4)
Team.create!(name: "Los Angeles Rams", location: "Los Angeles", ranking: 5)
Team.create!(name: "Miami Dolphins", location: "Miami", ranking: 31)
Team.create!(name: "Minnesota Vikings", location: "Minneapolis", ranking: 17)
Team.create!(name: "New England Patriots", location: "Foxborough", ranking: 2)
Team.create!(name: "New Orleans Saints", location: "New Orleans", ranking: 1)
Team.create!(name: "New York Giants", location: "New Jersey/New York", ranking: 30)
Team.create!(name: "New York Jets", location: "New Jersey/New York", ranking: 27)
Team.create!(name: "Oakland Raiders", location: "Oakland", ranking: 26)
Team.create!(name: "Philadelphia Eagles", location: "Philadelphia", ranking: 6)
Team.create!(name: "Pittsburgh Steelers", location: "Pittsburgh", ranking: 12)
Team.create!(name: "San Francisco 49ers", location: "San Francisco", ranking: 16)
Team.create!(name: "Seattle Seahawks", location: "Seattle", ranking: 18)
Team.create!(name: "Tampa Bay Buccaneers", location: "Tampa Bay", ranking: 23)
Team.create!(name: "Tennessee Titans", location: "Nashville", ranking: 22)
Team.create!(name: "Washington Redskins", location: "Washington DC", ranking: 28)


# t.string :name
# t.integer :age
# t.string :position
# t.integer :team_id

Player.create!(name: "Larry Fitzgerald", age: 35, position: "WR", team_id: Team.find_by(name: "Arizona Cardinals").id )
Player.create!(name: "Matt Ryan", age: 34 , position: "QB", team_id: Team.find_by(name: "Atlanta Falcons").id)
Player.create!(name: "Lamar Jackson", age: 22, position: "QB", team_id: Team.find_by(name: "Baltimore Ravens").id)
Player.create!(name: "Cole Beasley", age: 30, position: "WR", team_id: Team.find_by(name: "Buffalo Bills").id)
Player.create!(name: "Cam Newton", age: 39, position: "QB", team_id: Team.find_by(name: "Carolina Panthers").id)
Player.create!(name: "Khalil Mack", age: 28, position: "Linebacker", team_id: Team.find_by(name: "Chicago Bears").id)
Player.create!(name: "A.J. Green", age: 31, position: "WR", team_id: Team.find_by(name: "Cincinnati Bengals").id)
Player.create!(name: "Baker Mayfield", age: 24, position: "QB", team_id: Team.find_by(name: "Cleveland Browns").id)
Player.create!(name: "Ezekiel Elliott", age: 24, position: "RB", team_id: Team.find_by(name: "Dallas Cowboys").id)
Player.create!(name: "Chris Harris Jr.", age: 30, position: "CB", team_id: Team.find_by(name: "Denver Broncos").id)
Player.create!(name: "Danny Amendola ", age: 33, position: "WR", team_id: Team.find_by(name: "Detroit Lions").id)
Player.create!(name: "Aaron Rodgers", age: 35, position: "QB", team_id: Team.find_by(name: "Green Bay Packers").id)
Player.create!(name: "JJ Watt", age: 30, position: "DE", team_id: Team.find_by(name: "Houston Texans").id)
Player.create!(name: "Andrew Luck", age: 29, position: "QB", team_id: Team.find_by(name: "Indianapolis Colts").id)
Player.create!(name: "Nick Foles", age: 30, position: "QB", team_id: Team.find_by(name: "Jacksonville Jaguars").id)
Player.create!(name: "Patrick Mahomes", age: 23, position: "QB", team_id: Team.find_by(name: "Kansas City Chiefs").id)
Player.create!(name: "Melvin Gordon", age: 26, position: "RB", team_id: Team.find_by(name: "Los Angeles Chargers").id)
Player.create!(name: "Todd Gurley", age: 25, position: "WR", team_id: Team.find_by(name: "Los Angeles Rams").id)
Player.create!(name: "Josh Rosen", age: 22, position: "QB", team_id: Team.find_by(name: "Miami Dolphins").id)
Player.create!(name: "Kirk Cousins", age: 30, position: "QB", team_id: Team.find_by(name: "Minnesota Vikings").id)
Player.create!(name: "Tom Brady", age: 42, position: "QB", team_id: Team.find_by(name: "New England Patriots").id)
Player.create!(name: "Drew Brees", age: 40, position: "QB", team_id: Team.find_by(name: "New Orleans Saints").id)
Player.create!(name: "Eli Manning", age: 38, position: "QB", team_id: Team.find_by(name: "New York Giants").id)
Player.create!(name: "Le'Veon Bell", age: 27, position: "RB", team_id: Team.find_by(name: "New York Jets").id)
Player.create!(name: "Antonio Brown", age: 31, position: "WR", team_id: Team.find_by(name: "Oakland Raiders").id)
Player.create!(name: "Carson Wentz", age: 26, position: "QB", team_id: Team.find_by(name: "Philadelphia Eagles").id)
Player.create!(name: "Ben Roethlisberger", age: 37, position: "QB", team_id: Team.find_by(name: "Pittsburgh Steelers").id)
Player.create!(name: "Jimmy Garoppolo", age: 27, position: "QB", team_id: Team.find_by(name: "San Francisco 49ers").id)
Player.create!(name: "Mike Evans", age: 25, position: "WR", team_id: Team.find_by(name: "Tampa Bay Buccaneers").id)
Player.create!(name: "Marcus Mariota", age: 25, position: "QB", team_id: Team.find_by(name: "Tennessee Titans").id)
Player.create!(name: "Adrian Peterson", age: 34, position: "RB", team_id: Team.find_by(name: "Washington Redskins").id)
