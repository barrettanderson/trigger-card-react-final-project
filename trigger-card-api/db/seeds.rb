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

defensive = {
    name: "Being defensive",
    description: "Becoming closed off, trying to protect or justify self"
}
quickening_pulse = {
    name: "Quickening Pulse",
    description: "My pulse begins to quicken, leading to worse decision making and impatience"
}
WarningSign.create([
    defensive,
    quickening_pulse
])

listen_to_music = {
    name: "Listen to music",
    description: "Distraction - to help take a break"
}
box_breathing = {
    name: "Box breathing",
    description: "Meditative - regulate breathing, focus on going around the box"
}
CopingSkill.create([
    listen_to_music,
    box_breathing
])