# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bullying = {
    name: "Bullying",
    description: "People using their power to lessen others"
}
letting_people_down = {
    name: "When I let someone down",
    description: "Disappointing those I care about, or not following through/being able to follow through"
}
Trigger.create([
    bullying,
    letting_people_down
])

WarningSign.create([
    { }
])

CopingSkill.create([
    { }
])

t.string :name
t.string :description