# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "Default", experience: 0)
git_push = Action.create(name: "Git Push", value: 5, cooldown:5000, target: "You",)
add_stylesheet = Action.create(name: "Add Stylesheet", value: 5, cooldown:30000, target: "You",)
read_stack_overflow = Action.create(name: "Read Stack Overflow", value: 5, cooldown:10000, target: "You",)
write_code = Action.create(name: "Write Code", value: 5, cooldown:1000, target: "You",)
build_function = Action.create(name: "Build Function", value: 5, cooldown:3000, target: "You",)

UserAction.create(user_id: user.id, action_id: git_push.id)
UserAction.create(user_id: user.id, action_id: write_code.id)
